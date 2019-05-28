package com.huiketong.mapshow.controller;

import com.huiketong.mapshow.entity.BaseJsonResp;
import com.huiketong.mapshow.entity.User;
import com.huiketong.mapshow.sevice.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SystemController {

    @Autowired
    UserService userService;
    @PostMapping(value = "/api/add_user")
    @ResponseBody
    public BaseJsonResp addUser(String username,String password){
        BaseJsonResp resp = new BaseJsonResp();
       User user =  userService.addUser(username,password);
       if(ObjectUtils.isEmpty(user)){
           resp.setCode(1).setMsg("添加用户失败").setData(null);
       }else{
           resp.setCode(0).setMsg("添加用户成功").setData(user);
       }
        return resp;
    }
}
