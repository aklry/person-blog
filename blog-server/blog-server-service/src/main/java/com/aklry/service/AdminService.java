package com.aklry.service;

import com.aklry.dao.AdminDao;
import com.aklry.domain.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminService {
    @Autowired
    private AdminDao adminDao;

    public List<Admin> listAdmin() {
        return adminDao.listAdmin();
    }

    public Admin getAdminInfo(String username, String password) {
        return adminDao.findByParams(username, password);
    }
}
