package com.library.service.Impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.library.dto.ApiResponse;
import com.library.dto.LoginRequest;
import com.library.dto.RegisterRequest;
import com.library.entity.User;
import com.library.exception.InvalidCredentialsException;
import com.library.exception.UserAlreadyExistsException;
import com.library.repository.UserRepository;
import com.library.service.UserService;

import jakarta.servlet.http.HttpSession;

@Service
public class UserserviceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private HttpSession session;

    @Override
    public ApiResponse registerUser(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new UserAlreadyExistsException("Email already registered.");
        }

        if (userRepository.existsByMobile(request.getMobile())) {
            throw new UserAlreadyExistsException("Mobile number already registered.");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .mobile(request.getMobile())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .build();

        userRepository.save(user);

        return new ApiResponse(true, "Registration Successful", user);
    }

    @Override
    public ApiResponse loginUser(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new InvalidCredentialsException("Invalid Email or Password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new InvalidCredentialsException("Invalid Email or Password");
        }

        session.setAttribute("loggedInUser", user);

        return new ApiResponse(true, "Login Successful", user);
    }

    @Override
    public ApiResponse logoutUser() {

        session.invalidate();

        return new ApiResponse(true, "Logout Successful", null);
    }

}
