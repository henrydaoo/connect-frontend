package com.ecommerce.platform.controller;

import com.ecommerce.platform.dto.request.LoginRequest;
import com.ecommerce.platform.dto.request.RefreshRequest;
import com.ecommerce.platform.dto.request.RegisterRequest;
import com.ecommerce.platform.dto.request.ForgotPasswordRequest;
import com.ecommerce.platform.dto.request.ResetPasswordRequest;
import com.ecommerce.platform.dto.response.AuthResponse;
import com.ecommerce.platform.dto.response.UserResponse;
import com.ecommerce.platform.security.UserPrincipal;
import com.ecommerce.platform.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

// Thin controller: request/response mapping only, no business logic (docs/ARCHITECTURE.md).
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@Valid @RequestBody RefreshRequest request) {
        return ResponseEntity.ok(authService.refresh(request.getRefreshToken()));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(@Valid @RequestBody RefreshRequest request) {
        authService.logout(request.getRefreshToken());
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/forgot-password") public ResponseEntity<Void> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) { authService.requestPasswordReset(request); return ResponseEntity.noContent().build(); }
    @PostMapping("/reset-password") public ResponseEntity<Void> resetPassword(@Valid @RequestBody ResetPasswordRequest request) { authService.resetPassword(request); return ResponseEntity.noContent().build(); }

    @GetMapping("/me")
    public ResponseEntity<UserResponse> me(@AuthenticationPrincipal UserPrincipal principal) {
        return ResponseEntity.ok(authService.getCurrentUser(principal.getId()));
    }
}
