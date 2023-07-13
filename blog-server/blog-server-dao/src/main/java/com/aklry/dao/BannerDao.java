package com.aklry.dao;

import com.aklry.domain.Banner;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BannerDao {
    @Insert("insert into banner(id, imgUrl) values(default, #{url})")
    void addBanner(String url);
    @Select("select * from banner")
    List<Banner> getAllBanner();
}
