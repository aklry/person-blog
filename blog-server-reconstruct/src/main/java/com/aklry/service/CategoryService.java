package com.aklry.service;

import com.aklry.dao.CategoryDao;
import com.aklry.domain.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryDao categoryDao;
    @Transactional
    public void addCategory(String category) {
        categoryDao.addCategory(category);
    }

    public List<Category> getAllCategory() {
        return categoryDao.getAllCategory();
    }

    public boolean deleteCategoryById(int id) {
        //只有前端传递过来的id大于0才会往下执行
        if (id > 0) {
            categoryDao.deleteCategoryById(id);
            return true;
        } else {
            return false;
        }
    }
}
