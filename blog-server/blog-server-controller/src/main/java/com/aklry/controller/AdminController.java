package com.aklry.controller;

import com.aklry.domain.Admin;
import com.aklry.domain.Result;
import com.aklry.service.AdminService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @RequestMapping("/listAdmin")
    public List<Admin> listAdmin() {
        List<Admin> admins = adminService.listAdmin();
        return admins;
    }
    @RequestMapping("/login")
    public Result login(String username, String password) {
        Admin adminInfo = adminService.getAdminInfo(username, password);
        String name = adminInfo.getUsername();
        String adminPassword = adminInfo.getPassword();
        Result result = new Result();
        if (name != null && adminPassword != null && name.length() != 0 && adminPassword.length() != 0) {
            result.flag = true;
            result.message = "登录成功";
            result.token = Utils.getUUID();
        } else {
            result.flag = false;
            result.message = "用户名或密码错误";
            result.token = null;
        }
        return result;
    }
}
