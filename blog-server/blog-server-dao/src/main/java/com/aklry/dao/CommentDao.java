package com.aklry.dao;

import com.aklry.domain.Comment;
import com.aklry.domain.User;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

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

    /**
     * 查询所有评论
     * @return
     */
    @Select("select * from comment")
    @Results(id = "CommentDao", value = {
            @Result(id = true, property = "id", column = "id"),
            @Result(property = "name", column = "name"),
            @Result(property = "dateTime", column = "dateTime"),
            @Result(property = "content", column = "content"),
            @Result(property = "user", column = "user_id",
                    one = @One(select = "com.aklry.dao.UserDao.findUserById",fetchType = FetchType.EAGER))
    })
    List<Comment> findAll();
}
