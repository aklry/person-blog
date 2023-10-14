package com.aklry.dao;

import com.aklry.domain.Admin;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * @author aklry
 */
@Mapper
public interface AdminDao {
    /**
     * 查询所有管理员
     *
     */
    @Select("select * from admin")
    List<Admin> listAdmin();

    /**
     * 根据id删除管理员
     *
     * @param id Integer
     */
    @Delete("delete from admin where id = #{id}")
    void deleteAdmin(@Param("id") Integer id);

    /**
     * 根据id修改管理员信息
     *
     * @param username(用户名) String
     * @param password(密码) String
     */
    @Update("update admin set username=#{username},password=#{password} where id = #{id}")
    void updateAdmin(@Param("username") String username, @Param("password") String password, @Param("id") Integer id);

    /**
     * 添加管理员
     *
     * @param username String
     * @param password String
     */
    @Insert("insert into admin(id,username,password,role) values(default,#{username},#{password}, #{role}) ")
    void addAdmin(@Param("username") String username, @Param("password") String password, @Param("role") String role);

    @Select("select * from admin where binary username=#{username} and binary password=#{password}")
    Admin findByParams(Admin admin);

    /**
     * 根据用户名设置用户权限
     *
     * @param username(用户名) String
     * @param role(用户权限) String
     */
    @Update("update admin set role = #{role} where username = #{username}")
    void updateRoleByUsername(@Param("username") String username, @Param("role") String role);

    /**
     * 根据关键字模糊查询
     *
     * @param keywords String
     * @return List<Admin>
     */

    @Select("select * from admin where username like #{keywords}")
    List<Admin> findByUsernameLike(@Param("keywords") String keywords);
}
