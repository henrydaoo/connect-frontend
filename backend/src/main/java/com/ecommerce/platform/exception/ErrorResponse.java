package com.ecommerce.platform.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;

import java.time.Instant;

/** Matches the error shape documented in docs/API_SPEC.md. */
@Getter
@Builder
public class ErrorResponse {

    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private final Instant timestamp;
    private final int status;
    private final String error;
    private final String message;
    private final String path;
}
