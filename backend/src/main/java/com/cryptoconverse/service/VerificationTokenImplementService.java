package com.cryptoconverse.service;

import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.modal.VerificationToken;
import com.cryptoconverse.repository.VerificationTokenRepository;
import com.cryptoconverse.utils.OTPUtils;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VerificationTokenImplementService implements VerificationTokenService {
    private VerificationTokenRepository verificationTokenRepository;

    @Override
    public VerificationToken sendVerificationToken(User user, VerificationType verificationType) {
        VerificationToken verificationToken1 = new VerificationToken();
        verificationToken1.setOtp(OTPUtils.generateOTP());
        verificationToken1.setVerificationType(verificationType);
        verificationToken1.setUser(user);

        return verificationTokenRepository.save(verificationToken1 );
    }

    @Override
    public VerificationToken getVerificationTokenById(Long id) throws Exception {
        Optional<VerificationToken> verificationToken = verificationTokenRepository.findById(id);
        if(verificationToken.isPresent()){
            return verificationToken.get();
        }

        throw new Exception("Verification code is not found");
    }

    @Override
    public VerificationToken getVerificationTokenByUser(Long userId) {
        return verificationTokenRepository.findByUserId(userId);
    }

    @Override
    public void deleteVerificationToken(VerificationToken verificationToken) {
        verificationTokenRepository.delete(verificationToken);
    }
}
