package com.aklry.dao;

import com.aklry.domain.Comment;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;

import java.util.Date;
import java.util.List;

/**
 * @author aklry
 */
@Mapper
public interface CommentDao {
    /**
     * 新增评论
     *
     * @param content String
     * @param dateTime String
     * @param user_id String
     */
    @Insert("insert into comment(id, dateTime, content, user_id, blog_id) values(default, #{dateTime}, #{content}, #{user_id}, #{blog_id})")
    void addComment(@Param("content") String content, @Param("dateTime") Date dateTime,
                    @Param("user_id") Integer user_id, @Param("blog_id") Integer blog_id);

    /**
     * 查询所有评论
     *
     * @return List
     */
    @Select("select * from comment")
    @Results(id = "commentDao", value = {
            @Result(id = true, property = "id", column = "id"),
            @Result(property = "dateTime", column = "dateTime"),
            @Result(property = "content", column = "content"),
            @Result(property = "user", column = "user_id",
                    one = @One(select = "com.aklry.dao.UserDao.findUserById", fetchType = FetchType.LAZY)),
    })
    List<Comment> findAll();

    /**
     * 根据id删除评论
     *
     * @param id -->评论id
     */
    @Delete("delete from comment where id = #{id}")
    void deleteCommentById(Integer id);

    /**
     * 根据用户id查询评论
     *
     * @param user_id Integer
     * @return List
     */
    @Select("select * from comment where user_id = #{user_id}")
    List<Comment> findCommentByUserId(Integer user_id);

    /**
     * 根据博客id查询评论
     *
     * @param blog_id Integer
     * @return List
     */
    @Select("select * from comment where blog_id = #{blog_id}")
    @Results(id = "CommentDao", value = {
            @Result(id = true, property = "id", column = "id"),
            @Result(property = "name", column = "name"),
            @Result(property = "dateTime", column = "dateTime"),
            @Result(property = "content", column = "content"),
            @Result(property = "user", column = "user_id",
                    one = @One(select = "com.aklry.dao.UserDao.findUserById", fetchType = FetchType.EAGER))
    })
    List<Comment> findCommentByBlogId(Integer blog_id);
}
