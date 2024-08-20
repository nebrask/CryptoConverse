package com.cryptoconverse.repository;

import com.cryptoconverse.modal.ForgotPassword;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForgotPasswordRepository extends JpaRepository<ForgotPassword, String> {
    ForgotPassword findByUserId(Long id);
}
