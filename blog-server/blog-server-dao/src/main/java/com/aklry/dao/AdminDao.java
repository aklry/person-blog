package com.aklry.dao;

import com.aklry.domain.Admin;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminDao {
    /**
     * 查询所有管理员
     * @return
     */
    List<Admin> listAdmin();

    /**
     * 根据id删除管理员
     * @param id
     * @return --> 返回是否删除成功
     */
    String deleteAdmin(int id);

    /**
     * 修改管理员信息
     * @param admin
     * @return --> 返回是否删除成功
     */
    String updataAdmin(Admin admin);

    /**
     * 添加管理员
     * @param admin
     * @return --> 返回是否删除成功
     */
    String addAdmin(Admin admin);
}
