package com.ecommerce.platform.exception;

/** Thrown on login failure. Deliberately generic message - never reveal whether the email exists. */
public class InvalidCredentialsException extends ApiException {
    public InvalidCredentialsException() {
        super(ErrorCode.INVALID_CREDENTIALS, "Invalid email or password");
    }
}
