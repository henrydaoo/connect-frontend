package com.ecommerce.platform.payment;

import com.ecommerce.platform.common.OrderStatus;
import com.ecommerce.platform.common.PaymentMethod;
import com.ecommerce.platform.common.PaymentTransactionStatus;
import com.ecommerce.platform.dto.response.VnpayIpnResponse;
import com.ecommerce.platform.dto.response.VnpayReturnResponse;
import com.ecommerce.platform.entity.Order;
import com.ecommerce.platform.entity.PaymentTransaction;
import com.ecommerce.platform.event.PaymentSucceededEvent;
import com.ecommerce.platform.exception.ApiException;
import com.ecommerce.platform.exception.ErrorCode;
import com.ecommerce.platform.repository.PaymentTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationEventPublisher;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class VnpayServiceImpl implements VnpayService {

    private static final String HASH_KEY = "vnp_SecureHash";
    private static final DateTimeFormatter VNPAY_TIME = DateTimeFormatter.ofPattern("yyyyMMddHHmmss").withZone(ZoneOffset.UTC);

    private final PaymentTransactionRepository paymentTransactionRepository;
    private final ApplicationEventPublisher eventPublisher;
    private final ObjectMapper objectMapper;

    @Value("${app.vnpay.tmn-code}")
    private String tmnCode;
    @Value("${app.vnpay.hash-secret}")
    private String hashSecret;
    @Value("${app.vnpay.pay-url}")
    private String payUrl;
    @Value("${app.vnpay.return-url}")
    private String returnUrl;

    @Override
    @Transactional
    public String createPaymentUrl(Order order, String clientIp) {
        requireConfigured();
        PaymentTransaction transaction = paymentTransactionRepository
                .findFirstByOrderIdAndProviderOrderByCreatedAtDesc(order.getId(), PaymentMethod.VNPAY)
                .orElseGet(() -> createTransaction(order));
        return buildPaymentUrl(order, transaction.getProviderTxnRef(), clientIp);
    }

    @Override
    public VnpayReturnResponse verifyReturn(Map<String, String> parameters) {
        boolean validSignature = isValidSignature(parameters);
        String responseCode = parameters.get("vnp_ResponseCode");
        boolean successful = validSignature && "00".equals(responseCode);
        return new VnpayReturnResponse(validSignature, successful, parameters.get("vnp_TxnRef"), responseCode,
                successful ? "Payment result received. Awaiting IPN confirmation." : "Payment could not be verified.");
    }

    @Override
    @Transactional
    public VnpayIpnResponse handleIpn(Map<String, String> parameters) {
        if (!isValidSignature(parameters)) {
            return new VnpayIpnResponse("97", "Invalid signature");
        }

        String transactionReference = parameters.get("vnp_TxnRef");
        PaymentTransaction transaction = paymentTransactionRepository.findByProviderTxnRef(transactionReference)
                .orElse(null);
        if (transaction == null) {
            return new VnpayIpnResponse("01", "Order not found");
        }
        if (!amountMatches(transaction.getAmount(), parameters.get("vnp_Amount"))) {
            return new VnpayIpnResponse("04", "Invalid amount");
        }
        if (transaction.getStatus() == PaymentTransactionStatus.SUCCESS) {
            return new VnpayIpnResponse("02", "Order already confirmed");
        }

        transaction.setRawCallbackPayload(toJsonAuditValue(parameters));
        transaction.setProcessedAt(Instant.now());
        if (!"00".equals(parameters.get("vnp_ResponseCode")) || !"00".equals(parameters.get("vnp_TransactionStatus"))) {
            transaction.setStatus(PaymentTransactionStatus.FAILED);
            return new VnpayIpnResponse("00", "Payment failed recorded");
        }

        Order order = transaction.getOrder();
        if (order.getStatus() != OrderStatus.PENDING) {
            return new VnpayIpnResponse("02", "Order already processed");
        }
        transaction.setStatus(PaymentTransactionStatus.SUCCESS);
        order.setStatus(OrderStatus.PAID);
        eventPublisher.publishEvent(new PaymentSucceededEvent(order.getId()));
        return new VnpayIpnResponse("00", "Confirm success");
    }

    private PaymentTransaction createTransaction(Order order) {
        PaymentTransaction transaction = new PaymentTransaction();
        transaction.setOrder(order);
        transaction.setProvider(PaymentMethod.VNPAY);
        transaction.setProviderTxnRef(order.getId() + "-" + UUID.randomUUID().toString().replace("-", ""));
        transaction.setAmount(order.getTotalAmount());
        transaction.setStatus(PaymentTransactionStatus.INITIATED);
        return paymentTransactionRepository.save(transaction);
    }

    private String buildPaymentUrl(Order order, String transactionReference, String clientIp) {
        Map<String, String> params = new LinkedHashMap<>();
        params.put("vnp_Amount", order.getTotalAmount().movePointRight(2).setScale(0).toPlainString());
        params.put("vnp_Command", "pay");
        params.put("vnp_CreateDate", VNPAY_TIME.format(Instant.now()));
        params.put("vnp_CurrCode", "VND");
        params.put("vnp_ExpireDate", VNPAY_TIME.format(Instant.now().plusSeconds(900)));
        params.put("vnp_IpAddr", StringUtils.hasText(clientIp) ? clientIp : "127.0.0.1");
        params.put("vnp_Locale", "vn");
        params.put("vnp_OrderInfo", "Order " + order.getId());
        params.put("vnp_OrderType", "other");
        params.put("vnp_ReturnUrl", returnUrl);
        params.put("vnp_TmnCode", tmnCode);
        params.put("vnp_TxnRef", transactionReference);
        params.put("vnp_Version", "2.1.0");
        String query = canonicalQuery(params);
        return payUrl + "?" + query + "&" + HASH_KEY + "=" + urlEncode(hmacSha512(query));
    }

    private boolean isValidSignature(Map<String, String> parameters) {
        String suppliedHash = parameters.get(HASH_KEY);
        return StringUtils.hasText(suppliedHash) && hmacSha512(canonicalQuery(parameters)).equalsIgnoreCase(suppliedHash);
    }

    private String canonicalQuery(Map<String, String> parameters) {
        return parameters.entrySet().stream()
                .filter(entry -> !HASH_KEY.equals(entry.getKey()) && StringUtils.hasText(entry.getValue()))
                .sorted(Map.Entry.comparingByKey(Comparator.naturalOrder()))
                .map(entry -> urlEncode(entry.getKey()) + "=" + urlEncode(entry.getValue()))
                .collect(Collectors.joining("&"));
    }

    private String hmacSha512(String data) {
        try {
            Mac mac = Mac.getInstance("HmacSHA512");
            mac.init(new SecretKeySpec(hashSecret.getBytes(StandardCharsets.UTF_8), "HmacSHA512"));
            byte[] bytes = mac.doFinal(data.getBytes(StandardCharsets.UTF_8));
            StringBuilder result = new StringBuilder(bytes.length * 2);
            for (byte value : bytes) result.append(String.format("%02x", value));
            return result.toString();
        } catch (Exception ex) {
            throw new IllegalStateException("Unable to compute VNPay signature", ex);
        }
    }

    private boolean amountMatches(BigDecimal expected, String gatewayAmount) {
        try {
            return expected.movePointRight(2).setScale(0).compareTo(new BigDecimal(gatewayAmount)) == 0;
        } catch (RuntimeException ex) {
            return false;
        }
    }

    private String toJsonAuditValue(Map<String, String> parameters) {
        try {
            return objectMapper.writeValueAsString(parameters);
        } catch (JsonProcessingException ex) {
            throw new IllegalStateException("Unable to store VNPay callback audit payload", ex);
        }
    }

    private void requireConfigured() {
        if (!StringUtils.hasText(tmnCode) || !StringUtils.hasText(hashSecret) || !StringUtils.hasText(returnUrl)) {
            throw new ApiException(ErrorCode.VALIDATION_ERROR, "VNPay is not configured");
        }
    }

    private String urlEncode(String value) {
        return URLEncoder.encode(value, StandardCharsets.US_ASCII).replace("+", "%20");
    }
}
