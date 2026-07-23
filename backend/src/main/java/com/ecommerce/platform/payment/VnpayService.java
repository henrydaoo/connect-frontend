package com.ecommerce.platform.payment;

import com.ecommerce.platform.dto.response.VnpayIpnResponse;
import com.ecommerce.platform.dto.response.VnpayReturnResponse;
import com.ecommerce.platform.entity.Order;

import java.util.Map;

public interface VnpayService {
    String createPaymentUrl(Order order, String clientIp);

    VnpayReturnResponse verifyReturn(Map<String, String> parameters);

    VnpayIpnResponse handleIpn(Map<String, String> parameters);
}
