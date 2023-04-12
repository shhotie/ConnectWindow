package com.app.service;

import com.app.pojos.User;

public interface UserService {
	User validateUser(String email, String password);
	String registerUser(User newUser);
	String updateUser(User newUser);
	String deleteUser(User newUser);
	User getUser(Integer userId);
}
