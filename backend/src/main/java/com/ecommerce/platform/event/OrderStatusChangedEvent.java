package com.ecommerce.platform.event;

import com.ecommerce.platform.common.OrderStatus;

/** Published after an administrator commits an order-status transition. */
public record OrderStatusChangedEvent(Long orderId, OrderStatus status) {
}
