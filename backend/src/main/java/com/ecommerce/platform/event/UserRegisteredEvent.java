package com.ecommerce.platform.event;

/**
 * Published after a user is persisted. Consumed by an AFTER_COMMIT listener
 * (implemented in the mail/ package, feat/email-async) that sends the welcome email - never
 * call the mail service directly inside the registration transaction (see
 * docs/ARCHITECTURE.md "Email Implementation Pattern").
 */
public record UserRegisteredEvent(Long userId) {
}
