package com.ecommerce.platform.common;

/**
 * Order lifecycle state machine: PENDING -> PAID -> SHIPPED -> DELIVERED,
 * plus CANCELLED. Illegal transitions are rejected server-side
 * (see OrderService#updateStatus and docs/API_SPEC.md).
 */
public enum OrderStatus {
    PENDING,
    PAID,
    SHIPPED,
    DELIVERED,
    CANCELLED
}
