package com.ecommerce.platform.repository;

import com.ecommerce.platform.common.OrderStatus;
import com.ecommerce.platform.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
    Page<Order> findByUserId(Long userId, Pageable pageable);
    Optional<Order> findByUserIdAndIdempotencyKey(Long userId, String idempotencyKey);

    /** Used by the (phase 2) reconciliation job - see docs/OPERATIONS.md. */
    java.util.List<Order> findByStatusAndPaymentMethod(
            OrderStatus status, com.ecommerce.platform.common.PaymentMethod paymentMethod);
}
