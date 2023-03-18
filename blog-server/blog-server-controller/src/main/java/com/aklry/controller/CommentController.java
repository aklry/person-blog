package com.aklry.controller;

import com.aklry.domain.Comment;
import com.aklry.domain.Result;
import com.aklry.service.CommentService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/blog")
public class CommentController {
    @Autowired
    private CommentService commentService;
    private Result result;

    @PostMapping("/addComment")
    public Result addComment(@RequestBody Map<String, String> map) throws ParseException {
        result = Utils.getResult();
        if (map != null) {
            //获取前端发表评论参数
            String content = (String) map.get("content");
            String dateTime = map.get("dateTime");
            Integer user_id = Integer.parseInt(map.get("user_id"));
            System.out.println(content + " " + dateTime + " " + user_id);
            //将日期字符串转为Date对象
            SimpleDateFormat s1 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
            Date date = s1.parse(dateTime);
            //执行SQL语句，新增评论
            commentService.addComment(content, date, user_id);
            //封装结果集
            result.flag = true;
            result.message = "发表成功";
        }
        return result;
    }
    @PostMapping("/getAllComment")
    public List<Comment> listAllComment() {
        return commentService.listAllComment();
    }

    @PostMapping("/deleteComment")
    public Result deleteComment(@RequestBody Integer id) {
        result = Utils.getResult();
        if (id != null) {
            commentService.deleteCommentById(id.intValue());
            result.flag = true;
            result.message = "删除成功";
        }
        return result;
    }
}
