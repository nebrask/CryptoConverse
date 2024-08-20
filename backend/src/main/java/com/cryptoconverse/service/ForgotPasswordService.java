package com.cryptoconverse.service;

import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.ForgotPassword;
import com.cryptoconverse.modal.User;

public interface ForgotPasswordService {
    ForgotPassword createToken(User user, String id, String otp, VerificationType verificationType, String sendTo);

    ForgotPassword findById(String id);

    ForgotPassword findByUser(Long userId);

    void deleteToken(ForgotPassword token);

}
