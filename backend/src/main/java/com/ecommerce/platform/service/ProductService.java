package com.ecommerce.platform.service;

import com.ecommerce.platform.common.PageResponse;
import com.ecommerce.platform.dto.request.CreateProductRequest;
import com.ecommerce.platform.dto.request.UpdateProductRequest;
import com.ecommerce.platform.dto.response.ProductResponse;
import com.ecommerce.platform.entity.Product;

public interface ProductService {

    PageResponse<ProductResponse> list(Long categoryId, String search, int page, int size);

    ProductResponse getById(Long id);

    ProductResponse create(CreateProductRequest request);

    ProductResponse update(Long id, UpdateProductRequest request);

    /** Soft delete - sets is_active = false, never removes the row (ADR-003). */
    void delete(Long id);

    /**
     * Decrements stock for a checkout under a pessimistic row lock (ADR-002).
     * Must be called from within the checkout's own transaction so the lock
     * is held for the duration of the whole checkout, not just this call.
     * Returns the locked, post-decrement {@link Product} so the caller (order
     * checkout) can read its price/name for the order-item snapshot without
     * an extra query outside the lock.
     */
    Product decrementStockForCheckout(Long productId, int quantity);
}
