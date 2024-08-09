package com.cryptoconverse.service;

import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.User;

public interface UserService {
    public User findUserByJWT(String jwt) throws Exception;
    public User findUserByEmail(String email) throws Exception;
    public User findUserById(Long userId) throws Exception;
    public User enableTwoFactorAuthentication(VerificationType verificationType, String sendTo, User user);
    User updateUserPassword(User user, String newPassword);
}
