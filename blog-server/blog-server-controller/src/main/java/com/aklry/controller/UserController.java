package com.aklry.controller;

import com.aklry.domain.Result;
import com.aklry.domain.User;
import com.aklry.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/blog")
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("/listUser")
    public List<User> listUser() {
        List<User> users = userService.ListUser();
        return users;
    }

    @PostMapping("/addUser")
    public Result addUser(User user) {
        Result result = new Result(true,"添加学生成功");
        return result;
    }
}
