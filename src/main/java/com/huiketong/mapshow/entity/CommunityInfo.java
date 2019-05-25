package com.huiketong.mapshow.entity;

import javax.persistence.*;

@Entity
public class CommunityInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    @Column(columnDefinition = "varchar(255) default '' COMMENT '社区名字'")
    String name;
    @Column(columnDefinition = "int(11) default 0 COMMENT '属于哪个街道 1:唐闸,2:开发,3:秦灶,4:幸福,5:陈桥'")
    Integer comType;
    @Column(columnDefinition = "text COMMENT '社区信息介绍'")
    String content;
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getComType() {
        return comType;
    }

    public void setComType(Integer comType) {
        this.comType = comType;
    }
}
