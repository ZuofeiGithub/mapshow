package com.huiketong.mapshow.sevice.impl;

import com.huiketong.mapshow.entity.CommunityInfo;
import com.huiketong.mapshow.repository.CommunityInfoJpaDao;
import com.huiketong.mapshow.sevice.CommunityInfoSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommunityInfoSeviceImpl implements CommunityInfoSevice {
    @Autowired
    CommunityInfoJpaDao communityInfoJpaDao;
    @Override
    public CommunityInfo findContentByName(String name) {
        return communityInfoJpaDao.findCommunityInfoByName(name);
    }
}
