package com.ecommerce.platform.event;

/**
 * Published after an order is persisted (checkout committed). Consumed by an
 * AFTER_COMMIT listener (added in the mail/ package, Block feat/email-async)
 * that sends the order-confirmation email - never call the mail service
 * directly inside the checkout transaction (see docs/ARCHITECTURE.md
 * "Email Implementation Pattern").
 */
public record OrderCreatedEvent(Long orderId) {
}
