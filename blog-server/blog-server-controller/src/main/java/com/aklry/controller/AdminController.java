package com.aklry.controller;

import com.aklry.domain.Admin;
import com.aklry.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @RequestMapping("/")
    public List<Admin> listAdmin() {
        List<Admin> admins = adminService.listAdmin();
        return admins;
    }

}
