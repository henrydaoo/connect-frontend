package com.ecommerce.platform.exception;

/** Thrown when an admin edit conflicts with a concurrent update (@Version mismatch, ADR-002). */
public class OptimisticLockConflictException extends ApiException {
    public OptimisticLockConflictException(String resourceName, Object identifier) {
        super(ErrorCode.OPTIMISTIC_LOCK_CONFLICT,
                resourceName + " " + identifier + " was modified concurrently - please retry");
    }
}
