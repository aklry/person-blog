package com.aklry.service;

import com.aklry.dao.AdminDao;
import com.aklry.domain.Admin;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class AdminService {
    @Autowired
    private AdminDao adminDao;

    public List<Admin> listAdmin() {
        return adminDao.listAdmin();
    }
}
