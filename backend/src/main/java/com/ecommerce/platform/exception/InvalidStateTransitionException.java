package com.ecommerce.platform.exception;

/** Thrown when an order status transition violates the state machine (docs/API_SPEC.md). */
public class InvalidStateTransitionException extends ApiException {
    public InvalidStateTransitionException(String from, String to) {
        super(ErrorCode.INVALID_STATE_TRANSITION,
                "Invalid order status transition: " + from + " -> " + to);
    }
}
