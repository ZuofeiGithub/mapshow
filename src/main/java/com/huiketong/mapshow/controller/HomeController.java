package com.huiketong.mapshow.controller;

import com.huiketong.mapshow.data.CommunityData;
import com.huiketong.mapshow.entity.BaseJsonResp;
import com.huiketong.mapshow.entity.CommunityInfo;
import com.huiketong.mapshow.sevice.CommunityInfoSevice;
import com.huiketong.mapshow.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {
    @Autowired
    CommunityInfoSevice communityInfoSevice;
    @GetMapping(value = "/modifyinfo")
    public String modifyInfo(){
        return "echarts/modify_community_info.html";
    }

    @GetMapping(value = "/community_list")
    @ResponseBody
    public BaseJsonResp communityList(){
        BaseJsonResp resp = new BaseJsonResp();
        List<CommunityData> communityDataList = new ArrayList<>();

        List<CommunityInfo> communityInfoList = communityInfoSevice.findAll();
        if(communityInfoList.size() > 0){
            for(CommunityInfo communityInfo:communityInfoList){
                CommunityData data = new CommunityData();
                data.setId(communityInfo.getId());
                data.setName(communityInfo.getName());
                data.setType(communityInfo.getComType());
                communityDataList.add(data);
            }
            resp.setCode(0).setData(communityDataList).setMsg("获取列表成功");
        }else{
            resp.setCode(0).setData(new ArrayList<>()).setMsg("无数据");
        }
        return resp;
    }

    @PostMapping(value = "/modify_info")
    @ResponseBody
    public BaseJsonResp modifyInfo(Integer com_id,String info){
        BaseJsonResp resp = new BaseJsonResp();
        try {
            communityInfoSevice.updateComInfo(com_id,info);
            resp.setMsg("修改成功").setCode(0);
        }catch (Exception e){
            resp.setMsg("修改失败").setCode(1);
        }
        return resp;
    }

    @PostMapping(value = "/info")
    @ResponseBody
    public BaseJsonResp info(Integer com_id){
        BaseJsonResp resp = new BaseJsonResp();
        CommunityInfo communityInfo = communityInfoSevice.findContentById(com_id);
        if(ObjectUtils.isNotEmpty(communityInfo)){
            resp.setMsg("获取信息成功").setCode(0).setData(communityInfo.getContent());
        }else {
            resp.setData(null).setCode(1).setMsg("没有信息");
        }
        return resp;
    }
}
