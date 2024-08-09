package com.cryptoconverse.service;

import com.cryptoconverse.config.JWTProvider;
import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.OTPDetails;
import com.cryptoconverse.modal.TwoFactorAuthentication;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class UserImplementService implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User findUserByJWT(String jwt) throws Exception {
        String email = JWTProvider.getEmailFromToken(jwt);
        User user = userRepository.findByEmail(email);

        if(user == null) {
            throw new Exception("User not found");
        }
        return user;
    }

    @Override
    public User findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);

        if(user == null) {
            throw new Exception("User not found");
        }
        return user;
    }

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional<User> user = userRepository.findById(userId);
        if(user.isEmpty()) {
            throw new Exception("User not found");
        }
        return user.get();
    }

    @Override
    public User enableTwoFactorAuthentication(VerificationType verificationType, String sendTo, User user) {
        TwoFactorAuthentication twoFactorAuthentication = new TwoFactorAuthentication();
        twoFactorAuthentication.setEnabled(true);
        twoFactorAuthentication.setSendTo(verificationType);

        user.setTwoFactorAuthentication(twoFactorAuthentication);
        return userRepository.save(user);
    }

    @Override
    public User updateUserPassword(User user, String newPassword) {
        user.setPassword(newPassword);

        return userRepository.save(user);
    }
}
