package com.aklry.controller;

import com.aklry.domain.Result;
import com.aklry.domain.User;
import com.aklry.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/update")
    public Result updateUser(@RequestBody User user) {
        result = new Result();
        if (user.getName().length() != 0 && user.getAddress().length() != 0 && user.getPassword().length() != 0 && user.getSex().length() != 0 && user.getPhoneNumber().length() != 0) {
            userService.updateUser(user);
            result.message = "修改成功";
            result.flag = true;
        } else {
            result.flag = false;
            result.message = "请完整填写表单";
        }
        return result;
    }
}
