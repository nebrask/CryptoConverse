package com.cryptoconverse.controller;

import com.cryptoconverse.config.JWTProvider;
import com.cryptoconverse.modal.OTPDetails;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.repository.UserRepository;
import com.cryptoconverse.response.AuthenticationResponse;
import com.cryptoconverse.service.EmailService;
import com.cryptoconverse.service.OTPService;
import com.cryptoconverse.utils.OTPUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private OTPService otpService;

    @Autowired
    private EmailService emailService;

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User user) throws Exception {
        User isEmail = userRepository.findByEmail(user.getEmail());

        if(isEmail!=null){
            throw new Exception("Your email address is already registered with CryptoConverse");
        }

        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setEmail(user.getEmail());
        newUser.setFullName(user.getFullName());

        User savedUser = userRepository.save(newUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JWTProvider.generateToken(authentication);

        AuthenticationResponse result = new AuthenticationResponse();
        result.setJwt(jwt);
        result.setStatus(true);
        result.setMessage("Registration is Successful");

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User user) throws Exception {
        String userName = user.getEmail();
        String password = user.getPassword();

        Authentication authentication = authenticate(userName, password);

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JWTProvider.generateToken(authentication);

        User authenticateUser = userRepository.findByEmail(userName);

        if(user.getTwoFactorAuthentication().isEnabled()) {
            AuthenticationResponse response = new AuthenticationResponse();
            response.setMessage("Two Factor Authentication is enabled");
            response.setTwoFactorAuthenticationEnabled(true);
            String otp = OTPUtils.generateOTP();

            OTPDetails oldOTP= otpService.findOTPByUserId(authenticateUser.getId());
            if(oldOTP != null) {
                otpService.deleteOTP(oldOTP);
            }
            OTPDetails newOTP = otpService.createOTP(authenticateUser, otp, jwt);

            emailService.emailOTPVerification(userName, otp);

            response.setSession(newOTP.getId());
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        }

        AuthenticationResponse result = new AuthenticationResponse();
        result.setJwt(jwt);
        result.setStatus(true);
        result.setMessage("Login is successful");

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    private Authentication authenticate(String userName, String password) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
        if(userDetails == null){
            throw new BadCredentialsException("Invalid username");
        }
        if(!password.equals(userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
    }

    @PostMapping("/two-factor/otp/{otp}")
    public ResponseEntity<AuthenticationResponse> signInOTPValidator(@PathVariable String otp, @RequestParam String id) throws Exception {
        OTPDetails otpDetails = otpService.findOTPById(id);

        if(otpService.verifyOTP(otpDetails, otp)){
            AuthenticationResponse response = new AuthenticationResponse();
            response.setMessage("Two factor authentication is verified");
            response.setTwoFactorAuthenticationEnabled(true);
            response.setJwt(otpDetails.getJwt());

            return new ResponseEntity<>(response, HttpStatus.OK);
        }

        throw new Exception("Invalid OTP");
    }
}
