package com.cryptoconverse.service;

import com.cryptoconverse.modal.OTPDetails;
import com.cryptoconverse.modal.User;

public interface OTPService {
    OTPDetails createOTP(User user, String otp, String jwt);

    OTPDetails findOTPByUserId(Long userId);

    OTPDetails findOTPById(String id);

    boolean verifyOTP(OTPDetails otpDetails, String otp);

    void deleteOTP(OTPDetails otpDetails);
}
