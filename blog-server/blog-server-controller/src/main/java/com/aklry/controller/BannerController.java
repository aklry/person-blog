package com.aklry.controller;

import com.aklry.domain.Banner;
import com.aklry.domain.Result;
import com.aklry.service.BannerService;
import com.aklry.utils.Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/blog")
public class BannerController {
    @Autowired
    private BannerService bannerService;
    private Result result;
    @GetMapping("/addBanner")
    public Result addBanner(String url) {
        result = Utils.getResult();
        if (!"".equals(url)) {
            bannerService.addBanner(url);
            result.flag = true;
            result.message = "添加成功";
        } else {
            result.flag = false;
            result.message = "请先上传图片";
        }
        return result;
    }
    @PostMapping(value="/uploadBanner",produces = "text/html;charset=UTF-8")
    @CrossOrigin
    public String getUploadAvatar(HttpServletRequest request, MultipartFile file) throws IOException {
        // 创建文件夹，存放上传文件。
        String realPath = request.getSession().getServletContext().getRealPath("/banner");
        File dir = new File(realPath);
        if (!dir.exists()) {
            dir.mkdirs();
        }
        String filename = file.getOriginalFilename();
        filename = Utils.getUUID() + "_" + filename;
        //创建空文件
        File newFile = new File(dir, filename);

        // 将上传的文件写到空文件中
        file.transferTo(newFile);
        //返回文件路径
        return  "banner/" + filename;
    }

    @GetMapping("/getAllBanner")
    public Map<String, Object> getAllBanner() {
        Map<String, Object> map = new HashMap<>();
        result = Utils.getResult();
        List<Banner> allBanner = bannerService.getAllBanner();
        if (allBanner.size() > 0) {
            map.put("data",allBanner);
        } else {
            result.message = "暂无数据";
            map.put("message", result);
        }
        return map;
    }
}
