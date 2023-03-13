package com.aklry.domain;

import java.util.Date;

/**
 * 评论实体
 */
public class Comment {
    private int id;
    private Date dateTime;
    private String content;
    private int user_id;

    public Comment() {
    }

    public Comment(int id, Date dateTime, String content, int user_id) {
        this.id = id;
        this.dateTime = dateTime;
        this.content = content;
        this.user_id = user_id;
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

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", dateTime=" + dateTime +
                ", content='" + content + '\'' +
                ", user_id=" + user_id +
                '}';
    }
}
