package com.aklry.controller;

import com.aklry.domain.Category;
import com.aklry.domain.Result;
import com.aklry.service.CategoryService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    private Result result = Utils.getResult();

    @GetMapping("/addCategory")
    public Result addCategory(String category) {
        if (!"".equals(category)) {
            categoryService.addCategory(category);
            result.message = "添加类目成功";
            result.flag = true;
        }
        return result;
    }

    @GetMapping("/getAllCategory")
    public List<Category> getAllCategory() {
        return categoryService.getAllCategory();
    }

    @GetMapping("/deleteCategory")
    public Result deleteCategoryById(int id) {
        //判断前端传递过来的参数是否正确
        boolean flag = categoryService.deleteCategoryById(id);
        if (flag) {
            result.message = "删除成功";
            result.flag = true;
        } else {
            result.message = "删除失败";
            result.flag = false;
        }
        return result;
    }
}
