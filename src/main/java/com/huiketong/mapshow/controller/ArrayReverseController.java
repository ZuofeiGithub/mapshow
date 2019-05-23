package com.huiketong.mapshow.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ArrayReverseController {

    @GetMapping(value = "array_reverse")
    public String arrayReverse(String json){
        return "/echarts/array_reverse.html";
    }
}
