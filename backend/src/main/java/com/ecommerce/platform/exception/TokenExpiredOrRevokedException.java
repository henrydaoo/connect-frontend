package com.ecommerce.platform.exception;

/** Thrown when a refresh token is expired, revoked, or already rotated (ADR-004). */
public class TokenExpiredOrRevokedException extends ApiException {
    public TokenExpiredOrRevokedException() {
        super(ErrorCode.TOKEN_EXPIRED_OR_REVOKED, "Refresh token is invalid, expired, or revoked");
    }
}
