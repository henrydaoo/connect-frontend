package com.ecommerce.platform.service;

import com.ecommerce.platform.common.PageResponse;
import com.ecommerce.platform.dto.request.CheckoutRequest;
import com.ecommerce.platform.dto.request.UpdateOrderStatusRequest;
import com.ecommerce.platform.dto.response.OrderResponse;

public interface OrderService {

    /**
     * Creates an order from the current cart under a locked stock deduction
     * (ADR-002), then clears the cart. Idempotent on {@code idempotencyKey}
     * per user - a retried request with the same key returns the original
     * order rather than creating a duplicate (API_SPEC.md).
     */
    OrderResponse checkout(Long userId, String idempotencyKey, CheckoutRequest request);

    PageResponse<OrderResponse> listForUser(Long userId, int page, int size);

    /** Owner or admin only; a non-owner, non-admin request is treated as not-found, not forbidden. */
    OrderResponse getById(Long userId, boolean isAdmin, Long orderId);

    PageResponse<OrderResponse> listAllForAdmin(int page, int size);

    /** Rejects an illegal state-machine transition with a named exception (API_SPEC.md, ARCHITECTURE.md). */
    OrderResponse updateStatus(Long orderId, UpdateOrderStatusRequest request);
}
