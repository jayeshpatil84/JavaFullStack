package com.library.service;

import com.library.dto.ApiResponse;
import com.library.dto.LoginRequest;
import com.library.dto.RegisterRequest;

public interface UserService {
	ApiResponse registerUser(RegisterRequest request);

    ApiResponse loginUser(LoginRequest request);

    ApiResponse logoutUser();
}
