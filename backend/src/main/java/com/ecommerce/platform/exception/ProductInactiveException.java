package com.ecommerce.platform.exception;

/** Thrown when adding a soft-deleted (is_active = false) product to a cart (PRD.md, ADR-003). */
public class ProductInactiveException extends ApiException {
    public ProductInactiveException(Long productId) {
        super(ErrorCode.PRODUCT_INACTIVE, "Product " + productId + " is no longer available");
    }
}
