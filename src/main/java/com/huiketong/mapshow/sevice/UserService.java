package com.huiketong.mapshow.sevice;

import com.huiketong.mapshow.entity.User;

public interface UserService {
    User findUser(String username);

    User addUser(String username,String password);
}
