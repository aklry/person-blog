package com.aklry.service;

import com.aklry.dao.CommentDao;
import com.aklry.domain.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentDao commentDao;

    @Transactional
    public void addComment(String content, Date dateTime, Integer user_id) {
        commentDao.addComment(content, dateTime, user_id);
    }

    public List<Comment> listAllComment() {
        return commentDao.findAll();
    }

    @Transactional
    public void deleteCommentById(Integer id) {
        commentDao.deleteCommentById(id);
    }
}
