package com.ecommerce.platform.exception;

import lombok.Getter;

/**
 * Root of the single exception hierarchy (see docs/CODE_STANDARDS.md).
 * Never throw a bare RuntimeException from service code - subclass this
 * with a specific, named exception instead.
 */
@Getter
public class ApiException extends RuntimeException {

    private final ErrorCode errorCode;

    public ApiException(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public ApiException(ErrorCode errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }
}
