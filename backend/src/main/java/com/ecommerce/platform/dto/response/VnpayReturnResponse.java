package com.ecommerce.platform.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

/** Result intended for the frontend return page; it never mutates payment state. */
@Getter
@AllArgsConstructor
public class VnpayReturnResponse {
    private boolean validSignature;
    private boolean paymentSuccessful;
    private String transactionReference;
    private String responseCode;
    private String message;
}
