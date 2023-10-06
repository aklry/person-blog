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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/blog")
public class BannerController {
    @Autowired
    private BannerService bannerService;
    private Result result;

    @GetMapping("/addOrUpdateBanner")
    public Result addBanner(@RequestParam HashMap<String, Object> params) {
        String imgUrl = (String) params.get("imgUrl");
        String id = (String) params.get("id");
        result = Utils.getResult();
        /**
         * 根据前端传递过来的参数判断执行哪个操作
         */
        if ("0".equals(id)) {
            if (!"".equals(imgUrl)) {
                bannerService.addBanner(imgUrl);
                result.flag = true;
                result.message = "添加成功";
            } else {
                result.flag = false;
                result.message = "请先上传图片";
            }
        } else {
            Boolean isExist = bannerService.isExist(imgUrl);
            if (isExist) {
                result.message = "该banner图已存在";
                result.flag = false;
            } else {
                bannerService.UpdateBannerById(imgUrl, Integer.parseInt(id));
                result.message = "修改成功";
                result.flag = true;
            }
        }
        return result;
    }

    @PostMapping(value = "/uploadBanner", produces = "text/html;charset=UTF-8")
    @CrossOrigin
    public String getUploadAvatar(HttpServletRequest request, MultipartFile file) throws IOException {
        // 创建文件夹，存放上传文件。
        File dir = new File(request.getSession().getServletContext().getRealPath("/banner"));
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
        return "banner/" + filename;
    }

    @GetMapping("/getAllBanner")
    public Map<String, Object> getAllBanner() {
        Map<String, Object> map = new HashMap<>();
        result = Utils.getResult();
        List<Banner> allBanner = bannerService.getAllBanner();
        if (allBanner.size() > 0) {
            map.put("data", allBanner);
        } else {
            result.message = "暂无数据";
            map.put("message", result);
        }
        return map;
    }

    @GetMapping("/deleteBanner")
    public Result deleteById(int id) {
        result = Utils.getResult();
        if (id > 0) {
            bannerService.deleteBannerById(id);
            result.message = "删除成功";
            result.flag = true;
        }
        return result;
    }
}
