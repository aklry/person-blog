package com.aklry.service;

import com.aklry.dao.AdminDao;
import com.aklry.domain.Admin;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
@Service
public class AdminService {
    @Autowired
    private AdminDao adminDao;

    public List<Admin> listAdmin() {
        return adminDao.listAdmin();
    }

    public Admin getAdminInfo(Admin admin) {
        return adminDao.findByParams(admin);
    }
    @Transactional
    public void addAdmin(String username, String password) {
        adminDao.addAdmin(username,password);
    }
    @Transactional
    public void deleteById(int id) {
        adminDao.deleteAdmin(id);
    }
    @Transactional
    public void updateAdmin(String username, String password, int id) {
        adminDao.updateAdmin(username, password, id);
    }
}
