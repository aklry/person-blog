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
    public void deleteUser(int id) {
        userDao.deleteUserById(id);
    }

    public User findUser(String name, String password) {
        return userDao.findByCondition(name, password);
    }

    @Transactional
    public void updatePassword(String password, int id) {
        userDao.updatePasswordById(password, id);
    }

    public String findPasswordById(int id) {
        return userDao.findPasswordById(id);
    }

    @Transactional
    public void updateNameById(String name, int id) {
        userDao.updateNameById(name, id);
    }

    public String findNameById(int id) {
        return userDao.findNameById(id);
    }

    public User findUserByName(String name) {
        return userDao.findUserByName(name);
    }

    @Transactional
    public void updateUserURL(Integer id, String url) {
        userDao.updateUserURL(id, url);
    }
}
