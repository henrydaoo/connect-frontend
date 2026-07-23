package com.ecommerce.platform.exception;

/**
 * Thrown when checkout loses the stock race (ADR-002) - someone else bought
 * the remaining units first, or the requested quantity exceeds what's left.
 */
public class InsufficientStockException extends ApiException {
    public InsufficientStockException(Long productId, int requested, int available) {
        super(ErrorCode.INSUFFICIENT_STOCK,
                "Insufficient stock for product " + productId
                        + ": requested " + requested + ", available " + available);
    }
}
