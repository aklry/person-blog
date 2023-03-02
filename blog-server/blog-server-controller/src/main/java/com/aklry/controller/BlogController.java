package com.aklry.controller;

import com.aklry.domain.Blog;
import com.aklry.domain.Result;
import com.aklry.service.BlogService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/blog")
public class BlogController {
    @Autowired
    private BlogService blogService;
    private Result result;
    @PostMapping("/publishBlog")
    public Result publishBlog(@RequestBody Blog blog) {
        result = Utils.getResult();
        if (blog != null) {
            blogService.addBlog(blog);
            result.message = "添加成功";
            result.flag = true;
        } else {
            result.message = "添加失败";
            result.flag = false;
        }
        return result;
    }
}
