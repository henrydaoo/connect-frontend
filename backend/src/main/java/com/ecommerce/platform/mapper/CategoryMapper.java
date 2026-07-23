package com.ecommerce.platform.mapper;

import com.ecommerce.platform.dto.response.CategoryResponse;
import com.ecommerce.platform.entity.Category;
import org.mapstruct.Mapper;

/** Entity <-> DTO mapping only, no business logic (see docs/ARCHITECTURE.md). */
@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryResponse toResponse(Category category);
}
