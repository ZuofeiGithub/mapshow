package com.huiketong.mapshow.interceptor;

import com.huiketong.mapshow.entity.User;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

/**
 * @Author: ￣左飞￣
 * @Date: 2019/1/10 20:29
 * @Version 1.0
 */
public class MyInterceptor implements HandlerInterceptor {

    /**
     * 在@Controller方法执行之前就会执行
     * 通过返回true|false 来控制请求的执行,true:继续执行，false:停止执行
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        String basePath = request.getContextPath();
        String path = request.getRequestURI();
        if (!doLoginInterceptor(path, basePath)) {//是否进行登陆拦截
            return true;
        } else {
            HttpSession session = request.getSession();

              User user = (User) session.getAttribute("userinfo");

                if (user == null) {
                    //response.sendRedirect("/login");
                    return false;
                } else {
                    return true;
                }

        }
    }

    /**
     * 在@Controller方法执行之后，但是在视图渲染之前执行
     *
     * @param request
     * @param response
     * @param handler
     * @param modelAndView
     * @throws Exception
     */
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {
    }

    /**
     * 在处理结束之后执行
     *
     * @param request
     * @param response
     * @param handler
     * @param ex
     * @throws Exception
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {

    }


    /**
     * 是否进行登陆过滤
     *
     * @param path
     * @param basePath
     * @return
     */
    private boolean doLoginInterceptor(String path, String basePath) {
        path = path.substring(basePath.length());
        Set<String> notLoginPaths = new HashSet<>();
        //设置不进行登录拦截的路径：登录注册和验证码
        notLoginPaths.add("/login");
        notLoginPaths.add("/gangzhamap");
        notLoginPaths.add("/tooltips");
        notLoginPaths.add("/map");
        notLoginPaths.add("/layuimap");
        if (notLoginPaths.contains(path)) return false;
        return true;
    }
}
