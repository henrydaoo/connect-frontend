package com.ecommerce.platform.mail;

import com.ecommerce.platform.event.OrderCreatedEvent;
import com.ecommerce.platform.event.OrderStatusChangedEvent;
import com.ecommerce.platform.event.PaymentSucceededEvent;
import com.ecommerce.platform.event.UserRegisteredEvent;
import com.ecommerce.platform.event.PasswordResetRequestedEvent;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.transaction.event.TransactionPhase;
import org.springframework.transaction.event.TransactionalEventListener;

/** Domain events are handled after commit so a rolled-back business action never sends mail. */
@Component
@RequiredArgsConstructor
public class MailEventListener {
    private final MailService mailService;

    @Async("mailExecutor")
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void onUserRegistered(UserRegisteredEvent event) {
        mailService.sendWelcomeEmail(event.userId());
    }

    @Async("mailExecutor")
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void onOrderCreated(OrderCreatedEvent event) {
        mailService.sendOrderConfirmation(event.orderId());
    }

    @Async("mailExecutor")
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void onPaymentSucceeded(PaymentSucceededEvent event) {
        mailService.sendPaymentConfirmation(event.orderId());
    }

    @Async("mailExecutor")
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void onOrderStatusChanged(OrderStatusChangedEvent event) {
        mailService.sendOrderStatusChanged(event.orderId(), event.status());
    }
    @Async("mailExecutor") @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void onPasswordResetRequested(PasswordResetRequestedEvent event) { mailService.sendPasswordReset(event.email(), event.resetUrl()); }
}
