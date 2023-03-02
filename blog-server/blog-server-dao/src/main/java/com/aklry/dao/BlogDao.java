package com.aklry.dao;

import com.aklry.domain.Blog;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogDao {

    /**
     * 添加一条博客
     * @param blog
     */
    @Insert("insert into blog(id, publishTime, title, author, content, category, type) values(default, #{publishTime}, #{title}, #{author}, #{content}, #{category}, #{type})")
    void addBlog(Blog blog);

    /**
     * 查询所有博客
     * @return
     */
    @Select("select * from blog")
    List<Blog> listAllBlog();

    /**
     * 根据id查询博客内容
     * @param id
     * @return
     */

    @Select("select content from blog where id = #{id}")
    Blog findBlogById(@Param("id") int id);

    /**
     * 根据id删除博客
     * @param id
     */

    @Delete("delete from blog where id = #{id}")
    void deleteBlogById(@Param("id") int id);

    /**
     * 根据id更新博客内容以及发表时间
     * @param blog
     */

    @Update("update blog set publishTime = #{publishTime}, content = #{content} where id = #{id}")
    void updateContentById(Blog blog);
}
