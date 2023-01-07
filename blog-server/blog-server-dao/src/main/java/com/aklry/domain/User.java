package com.aklry.domain;

public class User {
    private int id;
    private String name;
    private String sex;
    private String address;
    private String phoneNumber;

    public User() {
    }

    public User(int id, String name, String sex, String address, String phoneNumber) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

    public User(String name, String sex, String address, String phoneNumber) {
        this.name = name;
        this.sex = sex;
        this.address = address;
        this.phoneNumber = phoneNumber;
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

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", address='" + address + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}
