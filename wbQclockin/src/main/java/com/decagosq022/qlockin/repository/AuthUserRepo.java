package com.decagosq022.qlockin.repository;

import com.decagosq022.qlockin.entity.AuthUser;
import com.yubico.webauthn.data.ByteArray;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthUserRepo extends JpaRepository<AuthUser, String> {
    AuthUser findByUserName(String username);

    AuthUser findByHandle(ByteArray userHandle);

}
