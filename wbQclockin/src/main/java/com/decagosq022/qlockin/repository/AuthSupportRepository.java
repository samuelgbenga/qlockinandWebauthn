package com.decagosq022.qlockin.repository;

import com.decagosq022.qlockin.entity.AuthnSupport;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthSupportRepository extends JpaRepository<AuthnSupport, String> {
    AuthnSupport findByCredId(String base64Url);
}
