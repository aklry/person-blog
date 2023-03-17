package com.aklry.service;

import com.aklry.dao.CommentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Service
public class CommentService {
    @Autowired
    private CommentDao commentDao;

    @Transactional
    public void addComment(String content, Date dateTime, Integer uid) {
        commentDao.addComment(content, dateTime, uid);
    }
}
