package com.aklry.controller;

import com.aklry.domain.Admin;
import com.aklry.domain.Result;
import com.aklry.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class AdminController {
    @Autowired
    private AdminService adminService;
    private Result result;
    /**
     * 获取所有管理员
     * @return
     */
    @GetMapping ("/listAllAdmin")
    public List<Admin> listAllAdmin() {
        return adminService.listAdmin();
    }

    @PostMapping("/add")
    public Result addAdmin(@RequestBody Admin admin) {
        if (admin.getUsername().length() != 0 && admin.getPassword().length() != 0) {
            Admin adminInfo = adminService.getAdminInfo(admin);
            result = new Result();
            if (adminInfo == null) {
                adminService.addAdmin(admin.getUsername(),admin.getPassword());
                result.flag = true;
                result.message = "添加成功";
            } else {
                result.message = "该用户已存在";
                result.flag = false;
            }
        } else {
            result.message = "请输入用户名或密码";
            result.flag = false;
        }
        return result;
    }
}
