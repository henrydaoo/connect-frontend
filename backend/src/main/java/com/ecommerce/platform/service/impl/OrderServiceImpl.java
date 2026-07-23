package com.ecommerce.platform.service.impl;

import com.ecommerce.platform.common.OrderStatus;
import com.ecommerce.platform.common.PageResponse;
import com.ecommerce.platform.dto.request.CheckoutRequest;
import com.ecommerce.platform.dto.request.UpdateOrderStatusRequest;
import com.ecommerce.platform.dto.response.OrderItemResponse;
import com.ecommerce.platform.dto.response.OrderResponse;
import com.ecommerce.platform.entity.Cart;
import com.ecommerce.platform.entity.CartItem;
import com.ecommerce.platform.entity.Order;
import com.ecommerce.platform.entity.OrderItem;
import com.ecommerce.platform.entity.Product;
import com.ecommerce.platform.event.OrderCreatedEvent;
import com.ecommerce.platform.event.OrderStatusChangedEvent;
import com.ecommerce.platform.common.PaymentMethod;
import com.ecommerce.platform.exception.ApiException;
import com.ecommerce.platform.exception.EmptyCartException;
import com.ecommerce.platform.exception.ErrorCode;
import com.ecommerce.platform.exception.ResourceNotFoundException;
import com.ecommerce.platform.repository.CartRepository;
import com.ecommerce.platform.repository.OrderRepository;
import com.ecommerce.platform.service.OrderService;
import com.ecommerce.platform.service.ProductService;
import com.ecommerce.platform.payment.VnpayService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final CartRepository cartRepository;
    private final ProductService productService;
    private final VnpayService vnpayService;
    private final ApplicationEventPublisher eventPublisher;

    @Override
    @Transactional
    public OrderResponse checkout(Long userId, String idempotencyKey, CheckoutRequest request) {
        if (!StringUtils.hasText(idempotencyKey)) {
            throw new ApiException(ErrorCode.VALIDATION_ERROR, "Idempotency-Key header is required");
        }

        // Idempotent order creation (API_SPEC.md): a retried request with the
        // same key returns the original order instead of creating a duplicate.
        var existing = orderRepository.findByUserIdAndIdempotencyKey(userId, idempotencyKey);
        if (existing.isPresent()) {
            return toResponse(existing.get(), paymentUrlFor(existing.get()));
        }

        Cart cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Cart", userId));

        if (cart.getItems().isEmpty()) {
            throw new EmptyCartException();
        }

        // Lock ordering (ADR-002): acquire pessimistic locks sorted by product
        // id so two checkouts touching the same products in opposite order
        // can't deadlock each other.
        List<CartItem> sortedItems = cart.getItems().stream()
                .sorted(Comparator.comparing(ci -> ci.getProduct().getId()))
                .toList();

        Order order = new Order();
        order.setUser(cart.getUser());
        order.setStatus(OrderStatus.PENDING);
        order.setPaymentMethod(request.getPaymentMethod());
        order.setIdempotencyKey(idempotencyKey);

        List<OrderItem> orderItems = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        for (CartItem cartItem : sortedItems) {
            // Locked, decremented inside this same @Transactional method, so
            // the lock is held for the whole checkout, not just this call
            // (ADR-002). Also gives us the authoritative price for the
            // order-item snapshot (DATABASE.md).
            Product locked = productService.decrementStockForCheckout(cartItem.getProduct().getId(), cartItem.getQuantity());

            OrderItem orderItem = new OrderItem();
            orderItem.setOrder(order);
            orderItem.setProduct(locked);
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setUnitPrice(locked.getPrice());
            orderItems.add(orderItem);

            total = total.add(locked.getPrice().multiply(BigDecimal.valueOf(cartItem.getQuantity())));
        }

        order.setTotalAmount(total);
        order.setItems(orderItems);
        orderRepository.saveAndFlush(order);

        String paymentUrl = paymentUrlFor(order);

        // Cart is cleared on successful checkout; orphanRemoval on Cart.items
        // deletes the rows on flush.
        cart.getItems().clear();

        // AFTER_COMMIT listener (added with feat/email-async) sends the
        // order-confirmation email - never call mail directly here (see
        // docs/ARCHITECTURE.md "Email Implementation Pattern").
        eventPublisher.publishEvent(new OrderCreatedEvent(order.getId()));

        return toResponse(order, paymentUrl);
    }

    @Override
    @Transactional(readOnly = true)
    public PageResponse<OrderResponse> listForUser(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<Order> result = orderRepository.findByUserId(userId, pageable);
        return PageResponse.from(result.map(this::toResponse));
    }

    /** A non-owner, non-admin request gets a 404, not a 403 - avoids confirming the order exists (see ARCHITECTURE.md). */
    @Override
    @Transactional(readOnly = true)
    public OrderResponse getById(Long userId, boolean isAdmin, Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order", orderId));

        if (!isAdmin && !order.getUser().getId().equals(userId)) {
            throw new ResourceNotFoundException("Order", orderId);
        }

        return toResponse(order);
    }

    @Override
    @Transactional(readOnly = true)
    public PageResponse<OrderResponse> listAllForAdmin(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "createdAt"));
        Page<Order> result = orderRepository.findAll(pageable);
        return PageResponse.from(result.map(this::toResponse));
    }

    @Override
    @Transactional
    public OrderResponse updateStatus(Long orderId, UpdateOrderStatusRequest request) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order", orderId));

        OrderStatusTransitionValidator.assertValid(order.getStatus(), request.getStatus());
        order.setStatus(request.getStatus());
        eventPublisher.publishEvent(new OrderStatusChangedEvent(order.getId(), order.getStatus()));

        return toResponse(order);
    }

    private OrderResponse toResponse(Order order) {
        return toResponse(order, null);
    }

    private OrderResponse toResponse(Order order, String paymentUrl) {
        List<OrderItemResponse> itemResponses = order.getItems().stream()
                .map(oi -> new OrderItemResponse(
                        oi.getProduct().getId(),
                        oi.getProduct().getName(),
                        oi.getQuantity(),
                        oi.getUnitPrice(),
                        oi.getUnitPrice().multiply(BigDecimal.valueOf(oi.getQuantity()))))
                .toList();

        return new OrderResponse(
                order.getId(),
                order.getStatus(),
                order.getPaymentMethod(),
                order.getTotalAmount(),
                itemResponses,
                order.getCreatedAt(),
                paymentUrl
        );
    }

    private String paymentUrlFor(Order order) {
        return order.getPaymentMethod() == PaymentMethod.VNPAY
                ? vnpayService.createPaymentUrl(order, null)
                : null;
    }
}
