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
public class LoginController {
    @Autowired
    private AdminService adminService;
    private Result result;
    @PostMapping("/login")
    public List<Object> login(@RequestBody Admin admin) {
        List<Object> endResult = new ArrayList<>();
        result = Utils.getResult();
       if (admin.getUsername().length() != 0 || admin.getPassword().length() != 0) {
           Admin adminInfo = adminService.getAdminInfo(admin);
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
       } else {
           result.flag = false;
           result.message = "请输入用户名或密码";
           result.token = null;
           endResult.add(result);
       }
        return endResult;
    }
}
