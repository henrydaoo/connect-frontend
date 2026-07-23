package com.ecommerce.platform.service;

import com.ecommerce.platform.dto.request.LoginRequest;
import com.ecommerce.platform.dto.request.RegisterRequest;
import com.ecommerce.platform.dto.request.ForgotPasswordRequest;
import com.ecommerce.platform.dto.request.ResetPasswordRequest;
import com.ecommerce.platform.dto.response.AuthResponse;
import com.ecommerce.platform.dto.response.UserResponse;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
    AuthResponse refresh(String rawRefreshToken);
    void logout(String rawRefreshToken);
    UserResponse getCurrentUser(Long userId);
    void requestPasswordReset(ForgotPasswordRequest request);
    void resetPassword(ResetPasswordRequest request);
}
