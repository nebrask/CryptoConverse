package com.cryptoconverse.repository;

import com.cryptoconverse.modal.OTPDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OTPRepository extends JpaRepository<OTPDetails, String> {
    OTPDetails findByUserId(Long userId);
}
