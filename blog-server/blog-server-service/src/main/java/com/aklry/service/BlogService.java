package com.aklry.service;

import com.aklry.dao.BlogDao;
import com.aklry.domain.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}