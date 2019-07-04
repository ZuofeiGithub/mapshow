package com.huiketong.mapshow.controller;


import com.huiketong.mapshow.config.FileConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;

/**
 * 文件下载
 */
@Controller
public class FileDownLoadController {
    @Autowired
    FileConfig fileConfig;
    @GetMapping("/download")
    @ResponseBody
    public String downloadFile(HttpServletRequest request, HttpServletResponse response) throws UnsupportedEncodingException {
        //获取指定目录下的第一个文件
        File srcFileDir = new File(fileConfig.getFilePath());
        if(srcFileDir.exists()) {
            File files[] = srcFileDir.listFiles();
            if (files.length > 0) {
                String fileName = files[0].getName();
                if (fileName != null) {
                    String realPath = fileConfig.getFilePath();
                    File file = new File(realPath, fileName);
                    if (file.exists()) {
                        // 配置文件下载
                        response.setHeader("content-type", "application/octet-stream");
                        response.setContentType("application/octet-stream");
                        // 下载文件能正常显示中文
                        response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));

                        // 实现文件下载
                        byte[] buffer = new byte[1024];
                        FileInputStream fis = null;
                        BufferedInputStream bis = null;
                        try {
                            fis = new FileInputStream(file);
                            bis = new BufferedInputStream(fis);
                            OutputStream os = response.getOutputStream();
                            int i = bis.read(buffer);
                            while (i != -1) {
                                os.write(buffer, 0, i);
                                i = bis.read(buffer);
                            }
                            System.out.println("Download the song successfully!");
                        } catch (Exception e) {
                            System.out.println("Download the song failed!");
                        } finally {
                            if (bis != null) {
                                try {
                                    bis.close();
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }
                            }
                            if (fis != null) {
                                try {
                                    fis.close();
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }
                            }
                        }
                    }
                }
            }
        }else{
            return "路径不存在";
        }
        return "文件不存在";
    }
}
