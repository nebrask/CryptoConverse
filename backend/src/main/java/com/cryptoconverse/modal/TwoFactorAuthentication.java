package com.cryptoconverse.modal;

import com.cryptoconverse.domain.VerificationType;
import lombok.Data;

@Data

public class TwoFactorAuthentication {
    private boolean isEnabled = false;
    private VerificationType sendTo;
}
