package com.aklry.dao;

import com.aklry.domain.User;
import org.apache.ibatis.annotations.*;
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
    @Select("select * from user where name = #{name} and password = #{password}")
    User findByCondition(@Param("name") String name, @Param("password") String password);
    /**
     * 添加用户
     * @param user
     */
    @Insert("insert into user(id,name,sex,address,phoneNumber,phoneNumber) values(default,#{name},#{sex},#{address},#{phoneNumber},#{password})")
    void addUser(User user);
    @Update("update user set name=#{name},sex=#{sex},password=#{password},phoneNumber=#{phoneNumber},address=#{address}")
    void updateUser(User user);
    @Delete("delete from user where id = #{id}")
    void deleteUserById(int id);
}
