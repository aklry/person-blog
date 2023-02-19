package com.aklry.utils;

import com.aklry.domain.Result;

import java.util.UUID;

public class Utils {
    public static String getUUID() {
        return UUID.randomUUID().toString();
    }

    public static Result getResult() {
        return new Result();
    }
}
