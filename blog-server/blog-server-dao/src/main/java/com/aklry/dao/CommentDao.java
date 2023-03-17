package com.aklry.dao;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface CommentDao {
    /**
     * 新增评论
     * @param content
     * @param dateTime
     * @param user_id
     */
    @Insert("insert into comment(id, dateTime, content, user_id) values(default, #{dateTime}, #{content}, #{user_id})")
    void addComment(@Param("content") String content, @Param("dateTime") Date dateTime, @Param("user_id") Integer user_id);
}
