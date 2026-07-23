package com.ecommerce.platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.retry.annotation.EnableRetry;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Modular monolith entry point (see docs/adr/ADR-001-modular-monolith.md).
 * One deployable application, one database - domain boundaries are enforced
 * by code convention (service-to-service calls only), not by network calls.
 */
@SpringBootApplication
@EnableAsync
@EnableRetry
@EnableScheduling // used by the (phase 2) payment reconciliation job, see docs/OPERATIONS.md
public class EcommercePlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcommercePlatformApplication.class, args);
    }
}
