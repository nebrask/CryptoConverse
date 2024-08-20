package com.cryptoconverse.controller;

import com.cryptoconverse.request.ForgotPasswordRequest;
import com.cryptoconverse.domain.VerificationType;
import com.cryptoconverse.modal.ForgotPassword;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.modal.VerificationToken;
import com.cryptoconverse.request.ResetPasswordRequest;
import com.cryptoconverse.response.APIResponse;
import com.cryptoconverse.response.AuthenticationResponse;
import com.cryptoconverse.service.EmailService;
import com.cryptoconverse.service.ForgotPasswordService;
import com.cryptoconverse.service.UserService;
import com.cryptoconverse.service.VerificationTokenService;
import com.cryptoconverse.utils.OTPUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private VerificationTokenService verificationTokenService;

    @Autowired
    private EmailService emailService;

    @Autowired
    private ForgotPasswordService forgotPasswordService;

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


    // sending otp for forgot password
    @PostMapping("/auth/users/reset-password/send-otp")
    public ResponseEntity<AuthenticationResponse> sendForgotPassword(@RequestBody ForgotPasswordRequest request) throws Exception {
        User user = userService.findUserByEmail(request.getSendTo());
        String otp = OTPUtils.generateOTP();
        UUID uuid = UUID.randomUUID();
        String id = uuid.toString();

        ForgotPassword token = forgotPasswordService.findByUser(user.getId());

        if (token == null) {
            token = forgotPasswordService.createToken(user, id, otp, request.getVerificationType(), request.getSendTo());
        }

        if (request.getVerificationType().equals(VerificationType.EMAIL)) {
            emailService.emailOTPVerification(user.getEmail(), token.getOtp());
        }

        AuthenticationResponse response = new AuthenticationResponse();
        response.setSession(token.getId());
        response.setMessage("Password reset OTP was sent successfuly");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // create endpoint for verifying otp, once user gets email of otp then he will provide the otp and hits the
    // endpoint below. If otp is correct then give the message of password being successful, else will throw the
    // exception below.
    @PatchMapping("/auth/users/reset-password/verify-otp")
    public ResponseEntity<APIResponse> resetPassword(@RequestParam String id, @RequestBody ResetPasswordRequest request, @RequestHeader("Authorization") String jwt) throws Exception {

        ForgotPassword forgotPassword = forgotPasswordService.findById(id);

        boolean isVerified = forgotPassword.getOtp().equals(request.getOtp());

        if(isVerified) {
            userService.updateUserPassword(forgotPassword.getUser(), request.getPassword());
            APIResponse response = new APIResponse();
            response.setMessage("Password was updated successfully");
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }

        throw new Exception("Wrong OTP was given");


    }
}
