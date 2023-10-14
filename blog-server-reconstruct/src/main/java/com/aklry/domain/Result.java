package com.aklry.domain;

import lombok.Data;

/**
 * 返回json结果
 */
@Data
public class Result {
    public boolean flag;//请求是否成功
    public String message;//请求提示信息
    public String token; //用户登录时的token
}
