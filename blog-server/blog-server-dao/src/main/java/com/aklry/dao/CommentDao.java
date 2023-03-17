package com.aklry.dao;

import org.apache.ibatis.annotations.Insert;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface CommentDao {
    /**
     *
     * @param content --> 评论内容
     * @param addTime --> 评论时间
     * @param uid --> 评论用户
     */
    @Insert("insert into comment(id, dateTime, content, user_id) values(default, #{addTime}, #{uid})")
    void addComment(String content, Date addTime, Integer uid);
}
