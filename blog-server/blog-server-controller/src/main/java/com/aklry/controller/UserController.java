package com.aklry.controller;

import com.aklry.domain.Admin;
import com.aklry.domain.Result;
import com.aklry.domain.User;
import com.aklry.service.UserService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/blog")
public class UserController {
    @Autowired
    private UserService userService;
    private Result result;

    @RequestMapping("/listUser")
    public List<User> listUser() {
        List<User> users = userService.ListUser();
        return users;
    }

    @PostMapping("/deleteUser")
    public Result deleteUserById(@RequestBody Integer id) {
        result = Utils.getResult();

        if (id != null) {
            userService.deleteUser(id.intValue());
            result.flag = true;
            result.message = "删除成功";
        } else {
            result.flag = false;
            result.message = "删除失败";
        }
        return result;
    }

    @PostMapping("/addUser")
    public Result addUser(@RequestBody User user) {
        result = Utils.getResult();
        if (user != null && user.getName().length() != 0
                && user.getPhoneNumber().length() != 0
                && user.getSex().length() != 0
                && user.getPassword().length() != 0
                && user.getAddress().length() != 0) {
            User u = userService.findUser(user.getName(), user.getPassword());
            if (u == null) {
                userService.addUser(user);
                result.flag = true;
                result.message = "注册成功";
            } else {
                result.flag = false;
                result.message = "该用户已存在";
            }
        } else {
            result.flag = false;
            result.message = "请正确填写个人信息";
        }
        return result;
    }

    @PostMapping("/userLogin")
    public List<Object> findUser(@RequestBody User user) {
        List<Object> endResult = new ArrayList<>();
        result = Utils.getResult();
        if (user.getName().length() != 0 && user.getPassword().length() != 0) {
            User u = userService.findUser(user.getName(), user.getPassword());
            if (u != null) {
                String name = u.getName();
                String password = u.getPassword();
                if (name != null && password != null && name.length() != 0 && password.length() != 0) {
                    result.flag = true;
                    result.message = "登录成功";
                    result.token = Utils.getUUID();
                    endResult.add(result);
                    endResult.add(u);
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

    @PostMapping("/updatePassword")
    public Result updatePassword(@RequestBody User user) {
        if (user.getPassword().length() != 0 && user.getPassword() != null) {
            String passwordById = userService.findPasswordById(user.getId());
            if (passwordById.equals(user.getPassword())) {
                result.flag = false;
                result.message = "新密码与原密码一致";
            } else {
                userService.updatePassword(user.getPassword(),user.getId());
                result.flag = true;
                result.message = "修改成功";
            }
        } else {
            result.flag = false;
            result.message = "请正确填写信息";
        }
        return result;
    }
}
