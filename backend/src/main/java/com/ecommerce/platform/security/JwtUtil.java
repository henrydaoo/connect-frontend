package com.ecommerce.platform.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

/**
 * Access tokens are short-lived and verified purely by signature - no DB
 * lookup on every request, keeping the hot path fast (ADR-004).
 * Refresh token *validity* (revocation, rotation) is handled separately by
 * RefreshTokenService against the refresh_tokens table, not here.
 */
@Component
public class JwtUtil {

    private final SecretKey accessKey;
    private final long accessExpirationMs;

    public JwtUtil(
            @Value("${app.jwt.access-secret}") String accessSecret,
            @Value("${app.jwt.access-expiration-ms}") long accessExpirationMs) {
        this.accessKey = Keys.hmacShaKeyFor(accessSecret.getBytes(StandardCharsets.UTF_8));
        this.accessExpirationMs = accessExpirationMs;
    }

    public String generateAccessToken(Long userId, String email, String role) {
        Date now = new Date();
        Date expiry = new Date(now.getTime() + accessExpirationMs);
        return Jwts.builder()
                .subject(String.valueOf(userId))
                .claim("email", email)
                .claim("role", role)
                .issuedAt(now)
                .expiration(expiry)
                .signWith(accessKey)
                .compact();
    }

    public Claims parseAndValidate(String token) {
        return Jwts.parser()
                .verifyWith(accessKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public Long getUserId(Claims claims) {
        return Long.valueOf(claims.getSubject());
    }
}
