package com.aklry.dao;

import com.aklry.domain.Category;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author aklry
 */
@Mapper
public interface CategoryDao {
    @Insert("insert into category(id, category) values(default, #{category})")
    void addCategory(String category);

    @Select("select * from category")
    List<Category> getAllCategory();

    @Delete("delete from category where id = #{id}")
    void deleteCategoryById(int id);
}
