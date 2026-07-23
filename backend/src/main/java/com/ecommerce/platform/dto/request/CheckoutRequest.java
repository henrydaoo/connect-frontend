package com.ecommerce.platform.dto.request;

import com.ecommerce.platform.common.PaymentMethod;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CheckoutRequest {

    @NotNull
    private PaymentMethod paymentMethod;
}
