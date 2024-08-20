package com.cryptoconverse.service;

import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.ForgotPassword;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.repository.ForgotPasswordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ForgotPasswordServiceImpl implements ForgotPasswordService{

    @Autowired
    private ForgotPasswordRepository forgotPasswordRepository;

    @Override
    public ForgotPassword createToken(User user, String id, String otp, VerificationType verificationType, String sendTo) {
        ForgotPassword token = new ForgotPassword();
        token.setUser(user);
        token.setSendTo(sendTo);
        token.setOtp(otp);
        token.setVerificationType(verificationType);
        token.setId(id);
        return forgotPasswordRepository.save(token);
    }

    @Override
    public ForgotPassword findById(String id) {
        Optional<ForgotPassword> token = forgotPasswordRepository.findById(id);
        return token.orElse(null); // token is present then return token, else null
    }

    @Override
    public ForgotPassword findByUser(Long userId) {
        return forgotPasswordRepository.findByUserId(userId);
    }

    @Override
    public void deleteToken(ForgotPassword token) {
        forgotPasswordRepository.delete(token);
    }
}
