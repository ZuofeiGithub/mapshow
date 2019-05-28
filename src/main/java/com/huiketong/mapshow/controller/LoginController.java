package com.huiketong.mapshow.controller;

import com.huiketong.mapshow.entity.BaseJsonResp;
import com.huiketong.mapshow.entity.User;
import com.huiketong.mapshow.sevice.UserService;
import com.huiketong.mapshow.utils.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Controller
public class LoginController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/login")
    public String login() {
        return "echarts/login.html";
    }

    @PostMapping(value = "/login")
    @ResponseBody
    public BaseJsonResp login(String username, String password, HttpSession session, HttpServletResponse response){
        BaseJsonResp resp = new BaseJsonResp();
        User user = userService.findUser(username);
        if(!ObjectUtils.isEmpty(user)){
            try {
                if(MD5Util.validPassword(password,user.getPassword())){
                    session.setAttribute("userinfo", user);
                    resp.setCode(0).setMsg("登陆成功");
                }else{
                    resp.setData(1).setMsg("登陆失败");
                }
            } catch (Exception e) {
                resp.setCode(1).setMsg("密码错误");
            }
        }
        return resp;
    }
}
