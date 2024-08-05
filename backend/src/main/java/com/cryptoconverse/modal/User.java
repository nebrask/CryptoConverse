package com.cryptoconverse.modal;

import com.cryptoconverse.domain.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fullName;
    private String email;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Embedded
    private TwoFactorAuthentication twoFactorAuthentication = new TwoFactorAuthentication();

    private UserRole role = UserRole.CUSTOMER;
}
