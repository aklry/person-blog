package com.aklry.domain;

import java.util.Date;

/**
 * 博客实体类
 */
public class Blog {
    private int id; //博客id
    private Date publishTime; //博客发表时间
    private String title; // 博客标题
    private String author; // 博客作者
    private String content; // 博客内容
    private String category; // 博客内容分区
    private String type; // 博客类型 -> 自制或者转载


    public Blog() {
    }

    public Blog(int id, Date publishTime, String title, String author, String content, String category, String type) {
        this.id = id;
        this.publishTime = publishTime;
        this.title = title;
        this.author = author;
        this.content = content;
        this.category = category;
        this.type = type;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(Date publishTime) {
        this.publishTime = publishTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", publishTime=" + publishTime +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", content='" + content + '\'' +
                ", category='" + category + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
