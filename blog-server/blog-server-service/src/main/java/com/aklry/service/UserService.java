package com.aklry.service;

import com.aklry.dao.UserDao;
import com.aklry.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public List<User> ListUser() {
        return userDao.listUser();
    }
    @Transactional
    public void addUser(User user) {
        userDao.addUser(user);
    }
    @Transactional
    public void updateUser(User user) {
        userDao.updateUser(user);
    }
    @Transactional
    public void deleteUser(int id) {
        userDao.deleteUserById(id);
    }

    public User findUser(String name, String password) {
        return userDao.findByCondition(name, password);
    }
}
