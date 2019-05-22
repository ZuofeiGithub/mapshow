package com.huiketong.mapshow.entity;


public class BaseJsonResp {
    Integer code;
    String msg;
    Object data;

    public Integer getCode() {
        return code;
    }

    public BaseJsonResp setCode(Integer code) {
        this.code = code;
        return this;
    }

    public String getMsg() {
        return msg;
    }

    public BaseJsonResp setMsg(String msg) {
        this.msg = msg;
        return this;
    }

    public Object getData() {
        return data;
    }

    public BaseJsonResp setData(Object data) {
        this.data = data;
        return this;
    }
}
