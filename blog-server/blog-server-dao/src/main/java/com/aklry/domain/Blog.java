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

    public Blog() {
    }

    public Blog(int id, Date publishTime, String title, String author, String content) {
        this.id = id;
        this.publishTime = publishTime;
        this.title = title;
        this.author = author;
        this.content = content;
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

    @Override
    public String toString() {
        return "Blog{" +
                "id=" + id +
                ", publishTime=" + publishTime +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
