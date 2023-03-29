package com.aklry.dao;

import com.aklry.domain.Blog;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.mapping.FetchType;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogDao {

    /**
     * 添加一条博客
     *
     * @param blog
     */
    @Insert("insert into blog(id, publishTime, title, author, content, category, type) values(default, #{publishTime}, #{title}, #{author}, #{content}, #{category}, #{type})")
    void addBlog(Blog blog);

    /**
     * 查询所有博客
     *
     * @return
     */
    @Select("select * from blog")
    List<Blog> listAllBlog();

    /**
     * 根据id查询博客内容
     *
     * @param id
     * @return
     */

    @Select("select content from blog where id = #{id}")
    Blog findBlogContentById(@Param("id") int id);

    /**
     * 根据id删除博客
     *
     * @param id
     */

    @Delete("delete from blog where id = #{id}")
    void deleteBlogById(@Param("id") int id);

    /**
     * 根据id更新博客内容以及发表时间
     *
     * @param blog
     */

    @Update("update blog set publishTime = #{publishTime}, content = #{content} where id = #{id}")
    void updateContentById(Blog blog);

    /**
     * 根据id查询博客及其相关评论
     *
     * @param id
     * @return
     */
    @Select("select * from blog where id = #{id}")
    @Results(id = "BlogDao", value = {
            @Result(id = true, property = "id", column = "id"),
            @Result(property = "publishTime", column = "publishTime"),
            @Result(property = "title", column = "title"),
            @Result(property = "author", column = "author"),
            @Result(property = "content", column = "content"),
            @Result(property = "category", column = "category"),
            @Result(property = "type", column = "type"),
            @Result(property = "comments", column = "id",
                    many = @Many(select = "com.aklry.dao.CommentDao.findCommentByBlogId", fetchType = FetchType.LAZY)
            )
    })
    Blog findBlogById(@Param("id") int id);

    /**
     * 根据博客分类查询博客信息
     * @param category
     * @return
     */
    @Select("select * from blog where category = #{category}")
    List<Blog> findBlogByCategory(String category);
}
