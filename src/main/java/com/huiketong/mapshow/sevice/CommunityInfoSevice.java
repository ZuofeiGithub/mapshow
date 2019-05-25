package com.huiketong.mapshow.sevice;

import com.huiketong.mapshow.entity.CommunityInfo;

import java.util.List;

public interface CommunityInfoSevice {

   CommunityInfo findContentByName(String name);

   List<CommunityInfo> findAll();

   void updateComInfo(Integer id,String content);
}
