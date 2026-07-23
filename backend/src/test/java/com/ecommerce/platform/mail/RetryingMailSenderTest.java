package com.ecommerce.platform.mail;

import jakarta.mail.Session;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.retry.annotation.EnableRetry;
import org.thymeleaf.spring6.SpringTemplateEngine;
import org.thymeleaf.templateresolver.StringTemplateResolver;

import java.util.Map;
import java.util.Properties;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.when;

/** SMTP failure is isolated to the async worker: retries exhaust without propagating to its caller. */
class RetryingMailSenderTest {

    @Test
    void smtpDownDoesNotPropagateAfterRetryBudgetIsExhausted() {
        try (AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(TestConfig.class)) {
            RetryingMailSender sender = context.getBean(RetryingMailSender.class);
            sender.send("customer@example.com", "subject", "welcome", Map.of());
            verify(context.getBean(JavaMailSender.class), times(3)).send(any(MimeMessage.class));
        }
    }

    @Configuration
    @EnableRetry
    static class TestConfig {
        @Bean
        JavaMailSender mailSender() {
            JavaMailSender sender = mock(JavaMailSender.class);
            when(sender.createMimeMessage()).thenReturn(new MimeMessage(Session.getInstance(new Properties())));
            doThrow(new MailSendException("SMTP unavailable")).when(sender).send(any(MimeMessage.class));
            return sender;
        }

        @Bean
        SpringTemplateEngine templateEngine() {
            SpringTemplateEngine engine = new SpringTemplateEngine();
            StringTemplateResolver resolver = new StringTemplateResolver();
            resolver.setTemplateMode("HTML");
            engine.setTemplateResolver(resolver);
            return engine;
        }

        @Bean
        RetryingMailSender retryingMailSender(JavaMailSender sender, SpringTemplateEngine engine) {
            return new RetryingMailSender(sender, engine, "");
        }
    }
}
