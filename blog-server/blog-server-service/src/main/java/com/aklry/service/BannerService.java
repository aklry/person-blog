package com.aklry.service;

import com.aklry.dao.BannerDao;
import com.aklry.domain.Banner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BannerService {
    @Autowired
    private BannerDao bannerDao;

    @Transactional
    public void addBanner(String url) {
        bannerDao.addBanner(url);
    }

    public List<Banner> getAllBanner() {
        return bannerDao.getAllBanner();
    }

    @Transactional
    public void deleteBannerById(int id) {
        bannerDao.deleteBannerById(id);
    }

    @Transactional
    public void UpdateBannerById(String imgurl, int id) {
        bannerDao.updateBannerById(imgurl, id);
    }

    public Boolean isExist(String imgUrl) {
        Banner banner = bannerDao.isExist(imgUrl);
        return banner != null ? true : false;
    }
}
