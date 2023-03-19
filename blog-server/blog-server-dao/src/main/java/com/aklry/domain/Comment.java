package com.aklry.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

/**
 * 评论实体
 */
//解决实体类中 发现有字段为null，在转化成json的时候，fasterxml.jackson将对象转换为json报错问题
@JsonIgnoreProperties(value = { "hibernateLazyInitializer", "handler" })
public class Comment {
    private int id;
    private Date dateTime;
    private String content;
    private User user;
    private Blog blog;

    public Comment() {
    }

    public Comment(int id, Date dateTime, String content, User user) {
        this.id = id;
        this.dateTime = dateTime;
        this.content = content;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Blog getBlog() {
        return blog;
    }

    public void setBlog(Blog blog) {
        this.blog = blog;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", dateTime=" + dateTime +
                ", content='" + content + '\'' +
                ", user=" + user +
                ", blog=" + blog +
                '}';
    }
}
