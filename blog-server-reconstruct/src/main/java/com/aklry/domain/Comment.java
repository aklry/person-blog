package com.aklry.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.Date;

/**
 * 评论实体
 */
//解决实体类中 发现有字段为null，在转化成json的时候，fasterxml.jackson将对象转换为json报错问题
@Data
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"})
public class Comment {
    private int id;
    private Date dateTime;
    private String content;
    private User user;
    private Blog blog;
}
