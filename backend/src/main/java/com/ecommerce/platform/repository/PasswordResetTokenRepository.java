package com.ecommerce.platform.repository;
import com.ecommerce.platform.entity.PasswordResetToken; import org.springframework.data.jpa.repository.*; import java.util.*;
public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken,Long>{ Optional<PasswordResetToken> findByTokenHash(String tokenHash); @Modifying @Query("update PasswordResetToken t set t.usedAt = CURRENT_TIMESTAMP where t.user.id = :userId and t.usedAt is null") void invalidateUnusedByUserId(Long userId); }
