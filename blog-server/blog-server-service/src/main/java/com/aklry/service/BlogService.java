package com.aklry.service;

import com.aklry.dao.BlogDao;
import com.aklry.domain.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BlogService {
    @Autowired
    private BlogDao blogDao;

    /**
     * 添加一条博客
     * @param blog
     */
    @Transactional
    public void addBlog(Blog blog) {
        blogDao.addBlog(blog);
    }

    public List<Blog> listAllBlog() {
        return blogDao.listAllBlog();
    }

    @Transactional
    public void deleteBlogById(int id) {
        blogDao.deleteBlogById(id);
    }

    public Blog findBlogById(int id) {
        return blogDao.findBlogById(id);
    }

    public List<Blog> findBlogByCategory(String category) {
        return blogDao.findBlogByCategory(category);
    }
}
