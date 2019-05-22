package com.huiketong.mapshow.repository;

import com.huiketong.mapshow.entity.CommunityInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityInfoJpaDao extends JpaRepository<CommunityInfo,Integer> {
    CommunityInfo findCommunityInfoByName(String name);
}
