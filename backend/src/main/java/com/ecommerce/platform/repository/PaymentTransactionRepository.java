package com.ecommerce.platform.repository;

import com.ecommerce.platform.entity.PaymentTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentTransactionRepository extends JpaRepository<PaymentTransaction, Long> {
    Optional<PaymentTransaction> findByProviderTxnRef(String providerTxnRef);

    Optional<PaymentTransaction> findFirstByOrderIdAndProviderOrderByCreatedAtDesc(Long orderId,
                                                                                     com.ecommerce.platform.common.PaymentMethod provider);
}
