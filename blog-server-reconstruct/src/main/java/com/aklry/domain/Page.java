package com.aklry.domain;

import lombok.Data;

/**
 * 分页对象
 */
@Data
public class Page {
    //当前页
    private int pageNum;
    //每页条数
    private int size;

}
