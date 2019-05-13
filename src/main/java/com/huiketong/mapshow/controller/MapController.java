package com.huiketong.mapshow.controller;

import com.huiketong.mapshow.constant.URL;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MapController {

    @GetMapping("/")
    public String gangzhaqu(){
        return URL.GANGZHADISTRICTSTREETS;
    }

    @GetMapping("/china")
    public String china(){
        return URL.CHINA;
    }
}
