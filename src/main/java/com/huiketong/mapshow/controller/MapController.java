package com.huiketong.mapshow.controller;

import com.huiketong.mapshow.constant.URL;
import com.huiketong.mapshow.entity.BaseJsonResp;
import com.huiketong.mapshow.entity.CommunityInfo;
import com.huiketong.mapshow.sevice.CommunityInfoSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class MapController {

    @Autowired
    CommunityInfoSevice communityInfoSevice;

    @GetMapping(value = "map")
    public String gangzhaqu(){
        return URL.GANGZHADISTRICTSTREETS;
    }

    @GetMapping("/china")
    public String china(){
        return URL.CHINA;
    }


    @GetMapping("/jiangxi")
    public String jiangxi(){
        return URL.JIANGXI;
    }

    @GetMapping("/tooltips")
    public String toolTips(){
        return URL.TOOLTIPS;
    }

    @PostMapping("/api/community_info")
    @ResponseBody
    public BaseJsonResp communityInfo(String name){
        BaseJsonResp resp = new BaseJsonResp();
        CommunityInfo communityInfo = communityInfoSevice.findContentByName(name);
        if(!ObjectUtils.isEmpty(communityInfo)){
            resp.setCode(0).setMsg("获取该社区内容成功").setData(communityInfo.getContent());
        }else{
            resp.setCode(200).setMsg("该社区没有设置内容").setData("");
        }
        return resp;
    }

    @GetMapping(value = "/gangzhamap")
    public String map(){
        return "echarts/redo_map.html";
    }


    @GetMapping(value = "/layuimap")
    public String layuimap(){
        return "echarts/layui_map.html";
    }
}
