package com.aklry.controller;

import com.aklry.domain.Result;
import com.aklry.domain.User;
import com.aklry.service.UserService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/blog")
public class UserController {
    @Autowired
    private UserService userService;
    private Result result;
    private User userByName;

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
        result = Utils.getResult();
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

    @PostMapping("/updateName")
    public List<Object> updateName(@RequestBody User user) {
        /**
         * 当用户修改昵称时输入一个新的昵称，首先现在数据库搜索改昵称是否存在，如果不存在，则修改，否则提示用户改昵称已存在
         */
        result = Utils.getResult();
        List<Object> list = new ArrayList<>();
        userByName = userService.findUserByName(user.getName());
        if (user != null && user.getName().length() != 0 && user.getName() != null) {
            if (userByName == null) {
                userService.updateNameById(user.getName(), user.getId());
                result.flag = true;
                result.message = "修改成功";
                userByName = userService.findUserByName(user.getName());
                list.add(result);
                list.add(userByName);

            } else {
                result.flag = false;
                result.message = "该昵称与原昵称一致";
                list.add(result);
            }
        } else {
            result.flag = false;
            result.message = "请正确填写信息";
            list.add(result);
        }
        return list;
    }

    /**
     * 头像上传
     */
    @PostMapping("/uploadAvatar")
    @CrossOrigin
    public String getUploadAvatar(HttpServletRequest request, MultipartFile file) throws IOException {
        // 创建文件夹，存放上传文件。
        String realPath = request.getSession().getServletContext().getRealPath("/upload");
        File dir = new File(realPath);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        String filename = file.getOriginalFilename();
        filename = Utils.getUUID() + "_" + filename;
        //创建空文件
        File newFile = new File(dir, filename);

        // 将上传的文件写到空文件中
        file.transferTo(newFile);
        //返回文件路径
        return  "upload/" + filename;
    }

    /**
     * 更新用户url
     */
    @PostMapping("/updateUserURL")
    public Result updateUserURL(@RequestBody HashMap<String, String> userInfo) {
        result = Utils.getResult();
        int id = Integer.parseInt(userInfo.get("id"));
        String url = userInfo.get("url");

        userService.updateUserURL(id, url);
        result.message = "修改成功";
        return result;
    }
}
