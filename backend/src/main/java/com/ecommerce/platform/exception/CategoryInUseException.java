package com.ecommerce.platform.exception;

/** Thrown when deleting a category that still has active products referencing it (ADR-003). */
public class CategoryInUseException extends ApiException {
    public CategoryInUseException(Long categoryId) {
        super(ErrorCode.CATEGORY_IN_USE,
                "Category " + categoryId + " still has active products referencing it");
    }
}
