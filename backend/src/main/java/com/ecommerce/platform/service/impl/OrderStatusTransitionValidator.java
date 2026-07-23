package com.ecommerce.platform.service.impl;

import com.ecommerce.platform.common.OrderStatus;
import com.ecommerce.platform.exception.InvalidStateTransitionException;

import java.util.EnumMap;
import java.util.EnumSet;
import java.util.Map;
import java.util.Set;

/**
 * Order lifecycle state machine (docs/API_SPEC.md, docs/ARCHITECTURE.md):
 * PENDING -> PAID -> SHIPPED -> DELIVERED, with CANCELLED reachable from
 * PENDING or PAID. DELIVERED and CANCELLED are terminal.
 */
final class OrderStatusTransitionValidator {

    private static final Map<OrderStatus, Set<OrderStatus>> ALLOWED = new EnumMap<>(OrderStatus.class);

    static {
        ALLOWED.put(OrderStatus.PENDING, EnumSet.of(OrderStatus.PAID, OrderStatus.CANCELLED));
        ALLOWED.put(OrderStatus.PAID, EnumSet.of(OrderStatus.SHIPPED, OrderStatus.CANCELLED));
        ALLOWED.put(OrderStatus.SHIPPED, EnumSet.of(OrderStatus.DELIVERED));
        ALLOWED.put(OrderStatus.DELIVERED, EnumSet.noneOf(OrderStatus.class));
        ALLOWED.put(OrderStatus.CANCELLED, EnumSet.noneOf(OrderStatus.class));
    }

    private OrderStatusTransitionValidator() {
    }

    static void assertValid(OrderStatus from, OrderStatus to) {
        if (!ALLOWED.getOrDefault(from, Set.of()).contains(to)) {
            throw new InvalidStateTransitionException(from.name(), to.name());
        }
    }
}
