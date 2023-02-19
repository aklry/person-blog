package com.aklry.utils;

import com.aklry.domain.Result;

import java.util.UUID;

public class Utils {
    public static String getUUID() {
        return UUID.randomUUID().toString();
    }

    /**
     * 工厂类
     * @return
     */
    public static Result getResult() {
        return new Result();
    }
}
