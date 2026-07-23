package com.ecommerce.platform.exception;

/** Thrown on unique-constraint violations surfaced as a business rule (e.g. email already registered). */
public class DuplicateResourceException extends ApiException {
    public DuplicateResourceException(String message) {
        super(ErrorCode.DUPLICATE_RESOURCE, message);
    }
}
