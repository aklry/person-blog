package com.aklry.domain;

import lombok.Data;

@Data
public class Admin {
    private int id;
    private String username;
    private String password;
    private String role;
}
