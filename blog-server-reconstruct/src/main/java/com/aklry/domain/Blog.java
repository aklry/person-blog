package com.aklry.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.Date;
import java.util.List;

/**
 * 博客实体类
 */
//解决实体类中 发现有字段为null，在转化成json的时候，fasterxml.jackson将对象转换为json报错问题
@JsonIgnoreProperties(value = { "hibernateLazyInitializer", "handler" })
@Data
public class Blog {
    private int id; //博客id
    private Date publishTime; //博客发表时间
    private String title; // 博客标题
    private String author; // 博客作者
    private String content; // 博客内容
    private String category; // 博客内容分区
    private String type; // 博客类型 -> 自制或者转载

    private List<Comment> comments; //博客相关评论
}
