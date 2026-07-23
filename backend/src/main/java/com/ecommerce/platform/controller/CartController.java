package com.ecommerce.platform.controller;

import com.ecommerce.platform.dto.request.AddCartItemRequest;
import com.ecommerce.platform.dto.request.UpdateCartItemRequest;
import com.ecommerce.platform.dto.response.CartResponse;
import com.ecommerce.platform.security.UserPrincipal;
import com.ecommerce.platform.service.CartService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

// Thin controller: request/response mapping only, no business logic (docs/ARCHITECTURE.md).
@RestController
@RequestMapping("/api/v1/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping
    public ResponseEntity<CartResponse> getCart(@AuthenticationPrincipal UserPrincipal principal) {
        return ResponseEntity.ok(cartService.getCart(principal.getId()));
    }

    /** Mutations return the full updated cart so the frontend doesn't need a second round trip. */
    @PostMapping("/items")
    public ResponseEntity<CartResponse> addItem(@AuthenticationPrincipal UserPrincipal principal,
                                                 @Valid @RequestBody AddCartItemRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(cartService.addItem(principal.getId(), request));
    }

    @PutMapping("/items/{itemId}")
    public ResponseEntity<CartResponse> updateItem(@AuthenticationPrincipal UserPrincipal principal,
                                                    @PathVariable Long itemId,
                                                    @Valid @RequestBody UpdateCartItemRequest request) {
        return ResponseEntity.ok(cartService.updateItem(principal.getId(), itemId, request));
    }

    @DeleteMapping("/items/{itemId}")
    public ResponseEntity<CartResponse> removeItem(@AuthenticationPrincipal UserPrincipal principal,
                                                    @PathVariable Long itemId) {
        return ResponseEntity.ok(cartService.removeItem(principal.getId(), itemId));
    }
}
