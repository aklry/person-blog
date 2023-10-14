package com.aklry.domain;

import lombok.Data;

@Data
public class User {
    private int id;
    private String name;
    private String sex;
    private String address;
    private String phoneNumber;
    private String password;
    private String url;
}
