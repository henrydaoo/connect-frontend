package com.ecommerce.platform.payment;

import com.ecommerce.platform.common.OrderStatus;
import com.ecommerce.platform.common.PaymentMethod;
import com.ecommerce.platform.common.PaymentTransactionStatus;
import com.ecommerce.platform.dto.response.VnpayIpnResponse;
import com.ecommerce.platform.entity.Order;
import com.ecommerce.platform.entity.PaymentTransaction;
import com.ecommerce.platform.event.PaymentSucceededEvent;
import com.ecommerce.platform.repository.PaymentTransactionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.test.util.ReflectionTestUtils;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

class VnpayServiceImplTest {

    @Test
    void verifiedIpnMarksPaymentOnceAndDuplicateIsNoOp() throws Exception {
        PaymentTransactionRepository repository = mock(PaymentTransactionRepository.class);
        ApplicationEventPublisher publisher = mock(ApplicationEventPublisher.class);
        VnpayServiceImpl service = new VnpayServiceImpl(repository, publisher, new ObjectMapper());
        ReflectionTestUtils.setField(service, "hashSecret", "test-secret");

        Order order = new Order();
        order.setId(42L);
        order.setStatus(OrderStatus.PENDING);
        order.setTotalAmount(new BigDecimal("100000.00"));
        PaymentTransaction transaction = new PaymentTransaction();
        transaction.setOrder(order);
        transaction.setAmount(order.getTotalAmount());
        transaction.setStatus(PaymentTransactionStatus.INITIATED);
        when(repository.findByProviderTxnRef("42-ref")).thenReturn(Optional.of(transaction));

        Map<String, String> ipn = signedIpn();
        VnpayIpnResponse first = service.handleIpn(ipn);
        VnpayIpnResponse duplicate = service.handleIpn(ipn);

        assertThat(first.getRspCode()).isEqualTo("00");
        assertThat(transaction.getStatus()).isEqualTo(PaymentTransactionStatus.SUCCESS);
        assertThat(order.getStatus()).isEqualTo(OrderStatus.PAID);
        assertThat(duplicate.getRspCode()).isEqualTo("02");
        verify(publisher).publishEvent(new PaymentSucceededEvent(42L));
    }

    private Map<String, String> signedIpn() throws Exception {
        Map<String, String> values = new LinkedHashMap<>();
        values.put("vnp_Amount", "10000000");
        values.put("vnp_ResponseCode", "00");
        values.put("vnp_TransactionStatus", "00");
        values.put("vnp_TxnRef", "42-ref");
        String canonical = values.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .map(entry -> encode(entry.getKey()) + "=" + encode(entry.getValue()))
                .collect(java.util.stream.Collectors.joining("&"));
        Mac mac = Mac.getInstance("HmacSHA512");
        mac.init(new SecretKeySpec("test-secret".getBytes(StandardCharsets.UTF_8), "HmacSHA512"));
        byte[] signature = mac.doFinal(canonical.getBytes(StandardCharsets.UTF_8));
        StringBuilder hex = new StringBuilder();
        for (byte value : signature) hex.append(String.format("%02x", value));
        values.put("vnp_SecureHash", hex.toString());
        return values;
    }

    private String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.US_ASCII).replace("+", "%20");
    }
}
