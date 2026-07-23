package com.ecommerce.platform.repository;

import com.ecommerce.platform.entity.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import org.springframework.data.jpa.repository.*;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByTokenHash(String tokenHash);
    @Modifying @Query("update RefreshToken t set t.revoked = true where t.user.id = :userId")
    void revokeAllByUserId(Long userId);
}
