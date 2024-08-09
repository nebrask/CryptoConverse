package com.cryptoconverse.service;

import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.modal.VerificationToken;

public interface VerificationTokenService {
    VerificationToken sendVerificationToken(User user, VerificationType verificationType);
    VerificationToken getVerificationTokenById(Long id) throws Exception;
    VerificationToken getVerificationTokenByUser(Long userId);
    void deleteVerificationToken(VerificationToken verificationToken);
}
