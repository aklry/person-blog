package com.aklry.domain;

import java.util.Date;

/**
 * 评论实体
 */
public class Comment {
    private int id;
    private Date dateTime;
    private String content;

    public Comment() {
    }

    public Comment(int id, Date dateTime, String content) {
        this.id = id;
        this.dateTime = dateTime;
        this.content = content;
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

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", dateTime=" + dateTime +
                ", content='" + content + '\'' +
                '}';
    }
}
