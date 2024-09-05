package com.decagosq022.qlockin.service;

import com.decagosq022.qlockin.payload.response.AuthRegisterResponse;
import com.decagosq022.qlockin.payload.response.AuthVerifyResponseDTO;

public interface TokenValidationService {

    String validateToken(String token);


}
