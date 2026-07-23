package com.ecommerce.platform.exception;

/** Thrown when checkout is attempted with no items in the cart. */
public class EmptyCartException extends ApiException {
    public EmptyCartException() {
        super(ErrorCode.EMPTY_CART, "Cannot checkout: cart is empty");
    }
}
