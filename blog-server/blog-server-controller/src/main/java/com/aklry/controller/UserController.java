package com.aklry.controller;

import com.aklry.domain.Result;
import com.aklry.domain.User;
import com.aklry.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("/listUser")
    public Result listUser(Model model) {
        List<User> users = userService.ListUser();
        model.addAttribute("users",users);
        Result result = new Result(true,"查找所有学生成功");

        return result;
    }

    @PostMapping("/addUser")
    public Result addUser(User user) {
        Result result = new Result(true,"添加学生成功");
        return result;
    }
}
