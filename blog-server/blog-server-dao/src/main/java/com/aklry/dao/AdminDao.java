package com.aklry.dao;

import com.aklry.domain.Admin;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminDao {
    /**
     * 查询所有管理员
     * @return
     */
    @Select("select * from admin")
    List<Admin> listAdmin();

    /**
     * 根据id删除管理员
     * @param id
     * @return --> 返回是否删除成功
     */
    @Delete("delete from admin where id = #{id}")
    void deleteAdmin(@Param("id") Integer id);

    /**
     * 根据id修改管理员信息
     * @param admin
     * @return --> 返回是否删除成功
     */
    @Update("update admin set username=#{username},password=#{password} where id = #{id}")
    String updateAdmin(Admin admin);

    /**
     * 添加管理员
     * @param username
     * @param password
     * @return --> 返回是否删除成功
     */
    @Insert("insert into admin(id,username,password) values(default,#{username},#{password}) ")
    void addAdmin(@Param("username") String username, @Param("password") String password);
    @Select("select * from admin where username=#{username} and password=#{password}")
    Admin findByParams(Admin admin);
}
