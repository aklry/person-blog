package com.aklry.utils;

import java.util.UUID;

import com.aklry.domain.Result;

public class Utils {
    public static String getUUID() {
        return UUID.randomUUID().toString();
    }

    /**
     * 工厂类
     *
     * @return
     */
    public static Result getResult() {
        return new Result();
    }
}
