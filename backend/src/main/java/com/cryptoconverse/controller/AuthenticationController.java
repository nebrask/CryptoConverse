package com.cryptoconverse.controller;

import com.cryptoconverse.config.JWTProvider;
import com.cryptoconverse.modal.User;
import com.cryptoconverse.repository.UserRepository;
import com.cryptoconverse.response.AuthenticationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody User user) throws Exception {
        User isEmail = userRepository.findByEmail(user.getEmail());

        if(isEmail!=null){
            throw new Exception("Your email address is already registered with CryptoConverse.");
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
        result.setMessage("Register is Successful");

        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User user) throws Exception {
        String userName = user.getEmail();
        String password = user.getPassword();

        Authentication authentication = authenticate(userName, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JWTProvider.generateToken(authentication);

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
}
