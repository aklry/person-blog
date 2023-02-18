package com.aklry.domain;

public class User {
    private int id;
    private String name;
    private String sex;
    private String address;
    private String phoneNumber;
    private int role;
    private String password;

    public User() {
    }

    public User(int id, String name, String sex, String address, String phoneNumber, int role, String password) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.password = password;
    }

    public User(String name, String sex, String address, String phoneNumber, int role, String password) {
        this.name = name;
        this.sex = sex;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getRole() {
        return role;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", address='" + address + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", role=" + role +
                ", password='" + password + '\'' +
                '}';
    }
}
