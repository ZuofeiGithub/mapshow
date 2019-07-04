package com.huiketong.mapshow.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class FileConfig {

    /**
     * 文件路径
     */
    @Value("${guangjiatong.filePath}")
    private String filePath;

    public String getFilePath() {
        return filePath;
    }
}
