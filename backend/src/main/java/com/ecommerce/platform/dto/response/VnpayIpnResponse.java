package com.ecommerce.platform.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/** VNPay IPN acknowledgement body. RspCode 00 means the notification was accepted. */
@Getter
@AllArgsConstructor
public class VnpayIpnResponse {
    private String RspCode;
    private String Message;
}
