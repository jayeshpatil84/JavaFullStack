package com.library.controller;

import com.library.dto.ApiResponse;
import com.library.dto.LoginRequest;
import com.library.dto.RegisterRequest;
import com.library.service.UserService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class AuthController {

    @Autowired
    private UserService userService;

    // Register User
    @PostMapping("/register")
    public ApiResponse registerUser(@Valid @RequestBody RegisterRequest request) {

        return userService.registerUser(request);
    }

    // Login User
    @PostMapping("/login")
    public ApiResponse loginUser(@Valid @RequestBody LoginRequest request) {

        return userService.loginUser(request);
    }

    // Logout User
    @PostMapping("/logout")
    public ApiResponse logoutUser() {

        return userService.logoutUser();
    }

}
