package com.cryptoconverse.repository;

import com.cryptoconverse.modal.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
    public VerificationToken findByUserId(Long userId);
}
