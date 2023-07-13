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
}
