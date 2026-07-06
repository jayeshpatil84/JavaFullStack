package com.library.dto;

import lombok.Data;

@Data
public class UserResponse {

    private Long userId;
    private String fullName;
    private String email;
    private String mobile;
    private String role;

}
