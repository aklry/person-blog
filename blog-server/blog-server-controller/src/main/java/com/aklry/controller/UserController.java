package com.aklry.controller;

import com.aklry.domain.Result;
import com.aklry.domain.User;
import com.aklry.service.UserService;
import com.aklry.utils.Utils;
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

    @PostMapping("/updateUser")
    public Result updateUser(@RequestBody User user) {
        result = Utils.getResult();
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
}
