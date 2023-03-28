package com.aklry.controller;

import com.aklry.domain.Admin;
import com.aklry.domain.Page;
import com.aklry.domain.Result;
import com.aklry.service.AdminService;
import com.aklry.utils.Utils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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
    @PostMapping ("/listAllAdmin")
    public PageInfo listAllAdmin(@RequestBody Page page) {
        //查询前设置参数 参数1：页数（从1开始） 参数2：每页条数
        PageHelper.startPage(page.getPageNum(),page.getSize());
        //正常查询
        List<Admin> admins = adminService.listAdmin();
        //创建页面对象，创建时将查询结果传入构造方法
        PageInfo pageInfo = new PageInfo(admins);
        return pageInfo;
    }

    @PostMapping("/add")
    public List<Object> addAdmin(@RequestBody Admin admin) {
        List<Object> endResult = new ArrayList<>();
        if (admin.getUsername().length() != 0 && admin.getPassword().length() != 0) {
            Admin adminInfo = adminService.getAdminInfo(admin);
            result = Utils.getResult();
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
        result = Utils.getResult();
        adminService.deleteById(id.intValue());

        result.flag = true;
        result.message = "删除成功";

        return result;
    }
    @PostMapping("/update")
    public Result updateAdmin(@RequestBody Admin admin) {
        result = Utils.getResult();
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

    @PostMapping("/updateRole")
    public Result updateRole(@RequestBody Admin admin) {
        result = Utils.getResult();
        if (admin != null && admin.getUsername().length() != 0 && admin.getRole().length() != 0) {
            adminService.updateRoleByUsername(admin.getUsername(), admin.getRole());
            result.message = "授权成功";
            result.flag = true;
        } else {
            result.message = "授权失败";
            result.flag = false;
        }
        return result;
    }

    @PostMapping("/search")
    public List<Admin> findByUsernameLike(@RequestBody Map<String, String> keywords) {
        String value = keywords.get("keywords");
        return adminService.findByUsernameLike(value);
    }
}
