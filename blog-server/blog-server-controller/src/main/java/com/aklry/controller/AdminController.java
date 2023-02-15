package com.aklry.controller;

import com.aklry.domain.Admin;
import com.aklry.domain.Result;
import com.aklry.service.AdminService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/blog")
public class AdminController {
    @Autowired
    private AdminService adminService;
    private Result result;
    @RequestMapping("/listAdmin")
    public List<Admin> listAdmin() {
        List<Admin> admins = adminService.listAdmin();
        return admins;
    }
    @PostMapping("/login")
    public List<Object> login(@RequestBody Admin admin) {
        System.out.println(admin);
        Admin adminInfo = adminService.getAdminInfo(admin);
        List<Object> endResult = new ArrayList<>();
        result = new Result();
        if (adminInfo != null) {
            String name = adminInfo.getUsername();
            String adminPassword = adminInfo.getPassword();
            if (name != null && adminPassword != null && name.length() != 0 && adminPassword.length() != 0) {
                result.flag = true;
                result.message = "登录成功";
                result.token = Utils.getUUID();
                endResult.add(result);
                endResult.add(adminInfo);
            }
        } else {
            result.flag = false;
            result.message = "没有该用户";
            result.token = null;
            endResult.add(result);
        }

        return endResult;
    }

    @PostMapping("/register")
    public Result register(@RequestBody Admin admin) {
        if (admin != null) {
            Admin adminInfo = adminService.getAdminInfo(admin);
            result = new Result();
            if (adminInfo == null) {
                adminService.addAdmin(admin);
                result.flag = true;
                result.message = "注册成功";
            } else {
                result.message = "该用户已注册";
                result.flag = false;
            }
        }
        return result;
    }
}
