package com.huiketong.mapshow.sevice.impl;

import com.huiketong.mapshow.entity.User;
import com.huiketong.mapshow.repository.UserJpaDao;
import com.huiketong.mapshow.sevice.UserService;
import com.huiketong.mapshow.utils.MD5Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserJpaDao userJpaDao;
    @Override
    public User findUser(String username) {
        return userJpaDao.findUserByUsername(username);
    }

    @Override
    public User addUser(String username, String password) {
        User exsit = userJpaDao.findUserByUsername(username);
        if(ObjectUtils.isEmpty(exsit)){
            User user = new User();
            user.setUsername(username);
            try {
                user.setPassword(MD5Util.getEncryptedPwd(password));
                userJpaDao.save(user);
            } catch (Exception e) {
                return null;
            }
            return user;
        }else{
            return null;
        }
    }
}
