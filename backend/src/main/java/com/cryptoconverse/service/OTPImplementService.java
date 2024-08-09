package com.cryptoconverse.service;

import com.cryptoconverse.modal.OTPDetails;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.repository.OTPRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class OTPImplementService implements OTPService{

    @Autowired
    private OTPRepository otpRepository;

    @Override
    public OTPDetails createOTP(User user, String otp, String jwt) {
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        OTPDetails otpDetails = new OTPDetails();
        otpDetails.setOtp(otp);
        otpDetails.setJwt(jwt);
        otpDetails.setId(id);
        otpDetails.setUser(user);

        return otpRepository.save(otpDetails);
    }

    @Override
    public OTPDetails findOTPByUserId(Long userId) {
        return otpRepository.findByUserId(userId);
    }

    @Override
    public OTPDetails findOTPById(String id) {
        Optional<OTPDetails> opt = otpRepository.findById(id);
        return opt.orElse(null);
    }

    @Override
    public boolean verifyOTP(OTPDetails otpDetails, String otp) {
        return otpDetails.getOtp().equals(otp);
    }

    @Override
    public void deleteOTP(OTPDetails otpDetails) {
        otpRepository.delete(otpDetails);
    }
}
