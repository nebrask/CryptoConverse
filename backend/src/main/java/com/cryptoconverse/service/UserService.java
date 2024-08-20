package com.cryptoconverse.service;

import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.User;

public interface UserService {
    User findUserByJWT(String jwt) throws Exception;
    User findUserByEmail(String email) throws Exception;
    User findUserById(Long userId) throws Exception;
    User enableTwoFactorAuthentication(VerificationType verificationType, String sendTo, User user);
    User updateUserPassword(User user, String newPassword);
}
