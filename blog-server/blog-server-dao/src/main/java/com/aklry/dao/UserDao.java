package com.aklry.dao;

import com.aklry.domain.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    /**
     * 查询所有学生
     * @return
     */
    @Select("select * from user")
    List<User> listUser();

    /**
     * 添加用户
     * @param user
     */
    @Insert("insert into user values(null,#{name},#{sex},#{address},#{phoneNumber})")
    void addUser(User user);
    @Update("update user set name=#{name},sex=#{sex},password=#{password},phoneNumber=#{phoneNumber},address=#{address}")
    void updateUser(User user);
}
