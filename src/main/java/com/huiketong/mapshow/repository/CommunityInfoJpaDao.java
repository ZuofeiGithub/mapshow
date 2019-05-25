package com.huiketong.mapshow.repository;

import com.huiketong.mapshow.entity.CommunityInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CommunityInfoJpaDao extends JpaRepository<CommunityInfo,Integer> {
    CommunityInfo findCommunityInfoByName(String name);

    @Query(value = "select * from community_info",nativeQuery = true)
    List<CommunityInfo> findAll();

    @Query(value = "update community_info set content = ?2 where id = ?1",nativeQuery = true)
    @Modifying
    @Transactional
    void updateComInfo(Integer id,String content);
}
