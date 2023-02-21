package com.aklry.domain;

/**
 * 分页对象
 */
public class Page {
    //当前页
    private int pageNum;
    //每页条数
    private int size;

    public Page() {
    }

    public Page(int pageNum, int size) {
        this.pageNum = pageNum;
        this.size = size;
    }

    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    @Override
    public String toString() {
        return "Page{" +
                "pageNum=" + pageNum +
                ", size=" + size +
                '}';
    }
}
