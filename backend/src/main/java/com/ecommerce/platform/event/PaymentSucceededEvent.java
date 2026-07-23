package com.ecommerce.platform.event;

/** Published only when a verified VNPay IPN first changes a payment to SUCCESS. */
public record PaymentSucceededEvent(Long orderId) {
}
