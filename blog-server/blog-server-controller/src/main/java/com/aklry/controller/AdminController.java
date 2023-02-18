package com.aklry.controller;

import com.aklry.domain.Admin;
import com.aklry.domain.Result;
import com.aklry.service.AdminService;
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
    /**
     * 获取所有管理员
     * @return
     */
    @GetMapping ("/listAllAdmin")
    public List<Admin> listAllAdmin() {
        return adminService.listAdmin();
    }

    @PostMapping("/add")
    public List<Object> addAdmin(@RequestBody Admin admin) {
        List<Object> endResult = new ArrayList<>();
        if (admin.getUsername().length() != 0 && admin.getPassword().length() != 0) {
            Admin adminInfo = adminService.getAdminInfo(admin);
            result = new Result();
            if (adminInfo == null) {
                adminService.addAdmin(admin.getUsername(),admin.getPassword());
                result.flag = true;
                result.message = "添加成功";
                endResult.add(result);
                endResult.add(admin);
            } else {
                result.message = "该用户已存在";
                result.flag = false;
                endResult.add(result);
            }
        } else {
            result.message = "请输入用户名或密码";
            result.flag = false;
            endResult.add(result);
        }
        return endResult;
    }

    /**
     * 根据id删除管理员
     * @param id
     * @return
     */
    @PostMapping("/delete")
    public Result deleteById(@RequestBody Integer id) {
        result = new Result();
        adminService.deleteById(id.intValue());

        result.flag = true;
        result.message = "删除成功";

        return result;
    }
    @PostMapping("/update")
    public Result updateAdmin(@RequestBody Admin admin) {
        result = new Result();
        if (admin.getUsername().length() != 0 && admin.getPassword().length() != 0) {
           adminService.updateAdmin(admin.getUsername(), admin.getPassword(), admin.getId());
           result.message = "修改成功";
           result.flag = true;
        } else {
            result.flag = false;
            result.message = "请输入用户名和密码";
        }
        return result;
    }
}
