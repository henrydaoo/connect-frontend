package com.ecommerce.platform.mail;

import com.ecommerce.platform.common.OrderStatus;

public interface MailService {
    void sendWelcomeEmail(Long userId);
    void sendOrderConfirmation(Long orderId);
    void sendPaymentConfirmation(Long orderId);
    void sendOrderStatusChanged(Long orderId, OrderStatus status);
    void sendPasswordReset(String email, String resetUrl);
}
