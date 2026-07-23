package com.ecommerce.platform.mapper;

import com.ecommerce.platform.dto.response.ProductResponse;
import com.ecommerce.platform.entity.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = CategoryMapper.class)
public interface ProductMapper {
    ProductResponse toResponse(Product product);
}
