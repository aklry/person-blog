package com.aklry.controller;

import com.aklry.domain.Blog;
import com.aklry.domain.Page;
import com.aklry.domain.Result;
import com.aklry.service.BlogService;
import com.aklry.utils.Utils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
            result.message = "发表成功";
            result.flag = true;
        } else {
            result.message = "发表失败";
            result.flag = false;
        }
        return result;
    }

    /**
     * 查询所有博客 -->分页查询
     * @return
     */
    @PostMapping("/listAllBlog")
    public PageInfo listAllBlog(@RequestBody Page page) {
        //查询前设置参数 参数1：页数（从1开始） 参数2：每页条数
        PageHelper.startPage(page.getPageNum(),page.getSize());
        //正常查询
        List<Blog> blogs = blogService.listAllBlog();
        //创建页面对象，创建时将查询结果传入构造方法
        PageInfo pageInfo = new PageInfo(blogs);

        return pageInfo;
    }

    /**
     * 查询所有博客
     * @return
     */
    @PostMapping("/listBlog")
    public List<Blog> listBlog() {
        return blogService.listAllBlog();
    }
}
