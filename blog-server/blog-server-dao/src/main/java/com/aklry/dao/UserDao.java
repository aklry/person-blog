package com.aklry.dao;

import com.aklry.domain.User;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    /**
     * 查询所有用户
     * @return
     */
    @Select("select * from user")
    List<User> listUser();

    /**
     * 根据用户名字和密码查询用户
     * @param name
     * @param password
     * @return
     */
    @Select("select * from user where name = #{name} and password = #{password}")
    User findByCondition(@Param("name") String name, @Param("password") String password);
    /**
     * 添加用户
     * @param user
     */
    @Insert("insert into user(id,name,sex,address,phoneNumber,password) values(default,#{name},#{sex},#{address},#{phoneNumber},#{password})")
    void addUser(User user);

    /**
     * 根据id删除用户
     * @param id
     */
    @Delete("delete from user where id = #{id}")
    void deleteUserById(int id);

    /**
     * 根据id修改密码
     * @param password
     * @param id
     */
    @Update("update user set password = #{password} where id = #{id}")
    void updatePasswordById(@Param("password") String password, @Param("id") int id);

    /**
     * 根据id查询用户密码
     * @param id
     * @return
     */
    @Select("select password from user where id = #{id}")
    String findPasswordById(@Param("id") int id);

    @Update("update user set name = #{name} where id = #{id}")
    void updateNameById(@Param("name") String name, @Param("id") int id);

    @Select("select name from user where id = #{id}")
    String findNameById(@Param("id") int id);
}
