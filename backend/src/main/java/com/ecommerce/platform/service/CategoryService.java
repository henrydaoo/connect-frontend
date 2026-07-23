package com.ecommerce.platform.service;

import com.ecommerce.platform.dto.request.CreateCategoryRequest;
import com.ecommerce.platform.dto.response.CategoryResponse;

import java.util.List;

public interface CategoryService {
    List<CategoryResponse> listAll();
    CategoryResponse create(CreateCategoryRequest request);
    CategoryResponse update(Long id, CreateCategoryRequest request);
    void delete(Long id);
}
