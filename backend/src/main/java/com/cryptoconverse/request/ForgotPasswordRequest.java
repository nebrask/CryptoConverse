package com.cryptoconverse.request;

import com.cryptoconverse.domain.VerificationType;
import lombok.Data;

@Data
public class ForgotPasswordRequest {
    private String sendTo;
    private VerificationType verificationType;
}
