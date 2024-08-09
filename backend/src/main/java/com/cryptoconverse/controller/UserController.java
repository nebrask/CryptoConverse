package com.cryptoconverse.controller;

import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.modal.VerificationToken;
import com.cryptoconverse.service.EmailService;
import com.cryptoconverse.service.UserService;
import com.cryptoconverse.service.VerificationTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private VerificationTokenService verificationTokenService;

    @Autowired
    private EmailService emailService;

    @GetMapping("/api/users/profile")
    public ResponseEntity<User> getUserProfile(@RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJWT(jwt);

        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/api/users/verification/{verificationType}/send-otp")
    public ResponseEntity<String> sendVerificationOTP(@RequestHeader("Authorization") String jwt, @PathVariable VerificationType  verificationType) throws Exception {
        User user = userService.findUserByJWT(jwt);

        VerificationToken verificationToken = verificationTokenService.getVerificationTokenByUser(user.getId());

        if(verificationToken == null) {
            verificationToken = verificationTokenService.sendVerificationToken(user, verificationType);
        }

        if(verificationType.equals(VerificationType.EMAIL)) {
            emailService.emailOTPVerification(user.getEmail(), verificationToken.getOtp());
        }

        return new ResponseEntity<>("Verification of OTP being sent was successful", HttpStatus.OK);
    }


    @PatchMapping("/api/users/enable-two-factor/verify-otp/{otp}")
    public ResponseEntity<User> enableTwoFactorAuthentication(@PathVariable String otp, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJWT(jwt);

        VerificationToken verificationToken = verificationTokenService.getVerificationTokenByUser(user.getId());

        String sendTo = verificationToken.getVerificationType().equals(VerificationType.EMAIL)?
                verificationToken.getEmail():verificationToken.getMobile();

        boolean isVerified = verificationToken.getOtp().equals(otp);

        if (isVerified) {
            User updatedUser = userService.enableTwoFactorAuthentication(verificationToken.getVerificationType(), sendTo, user);
            verificationTokenService.deleteVerificationToken(verificationToken);

            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        }

        throw new Exception("Invalid OTP");
    }
}
