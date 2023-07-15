package com.aklry.dao;

import com.aklry.domain.Banner;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BannerDao {
    @Insert("insert into banner(id, imgUrl) values(default, #{url})")
    void addBanner(String url);
    @Select("select * from banner")
    List<Banner> getAllBanner();

    @Delete("delete from banner where id = #{id}")
    void deleteBannerById(int id);

    @Update("update banner set imgUrl = #{imgUrl} where id = #{id}")
    void updateBannerById(@Param("imgUrl") String imgUrl, @Param("id") int id);

    @Select("select * from banner where imgUrl = #{imgUrl}")
    Banner isExist(@Param("imgUrl") String imgUrl);
}
