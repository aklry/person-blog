package com.aklry.controller;

import com.aklry.domain.Result;
import com.aklry.service.CommentService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/blog")
public class CommentController {
    @Autowired
    private CommentService commentService;
    private Result result;
    @PostMapping("/addComment")
    public Result addComment(@RequestBody String content, @RequestBody Date dateTime, @RequestBody Integer uid) {
        result = Utils.getResult();
        if (content.length() != 0 && dateTime != null && uid != null) {
            commentService.addComment(content, dateTime, uid);
            result.flag = true;
        } else {
            result.flag = false;
        }
        return result;
    }
}
