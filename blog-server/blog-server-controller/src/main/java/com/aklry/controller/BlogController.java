package com.aklry.controller;

import com.aklry.domain.Blog;
import com.aklry.domain.Page;
import com.aklry.domain.Result;
import com.aklry.service.BlogService;
import com.aklry.utils.Utils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
//            blog.setContent(Utils.removeHtmlTag(blog.getContent()));
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
     *
     * @return
     */
    @PostMapping("/listAllBlog")
    public PageInfo listAllBlog(@RequestBody Page page) {
        //查询前设置参数 参数1：页数（从1开始） 参数2：每页条数
        PageHelper.startPage(page.getPageNum(), page.getSize());
        //正常查询
        List<Blog> blogs = blogService.listAllBlog();
        //创建页面对象，创建时将查询结果传入构造方法
        PageInfo pageInfo = new PageInfo(blogs);

        return pageInfo;
    }

    /**
     * 查询所有博客
     *
     * @return
     */
    @PostMapping("/listBlog")
    public Map<String, Integer> listBlog() {
        List<Blog> blogs = blogService.listAllBlog();
        Map<String, Integer> map = new HashMap<>();
        for (Blog blog : blogs) {
            map.put(blog.getAuthor(), map.getOrDefault(blog.getAuthor(), 0) + 1);
        }
        return map;
    }

    /**
     * 根据博客id删除用户
     *
     * @param id
     * @return
     */
    @PostMapping("/deleteBlogById")
    public Result deleteBlogById(@RequestBody Integer id) {
        result = Utils.getResult();
        if (id != null) {
            blogService.deleteBlogById(id.intValue());
            result.flag = true;
            result.message = "删除成功";
        } else {
            result.flag = false;
            result.message = "删除失败";
        }
        return result;
    }

    /**
     * 根据博客id获取博客信息
     *
     * @param id
     * @return
     */
    @PostMapping("/findBlogById")
    public Blog findBlogById(@RequestBody Integer id) {
        return blogService.findBlogById(id.intValue());
    }

    @GetMapping("/findBlogByCategory")
    public List<Blog> findBlogByCategory(String content) {
        return blogService.findBlogByCategory(content);
    }
}
