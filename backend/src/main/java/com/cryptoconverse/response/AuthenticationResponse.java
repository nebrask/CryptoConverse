package com.cryptoconverse.response;

import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private boolean status;
    private String message;
    private boolean twoFactorAuthenticationEnabled;
    private String session;
}
