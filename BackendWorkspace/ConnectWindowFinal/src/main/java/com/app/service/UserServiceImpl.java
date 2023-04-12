package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.pojos.User;
import com.app.repository.UserRepo;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public User validateUser(String email, String password) {
		return userRepo.
				findByEmailAndPassword(email, password).
				orElseThrow(() -> new ResourceNotFoundException("Invalid Credentials!!!!!"));
		
		
	}
	@Override
	public String registerUser(User newUser) {

		User persistentUser = userRepo.save(newUser);
		return "New User registered with ID " + persistentUser.getId();
	}

	@Override
	public String updateUser(User newUser) {
		User user = userRepo.getById(newUser.getId());
		User persistentUser = userRepo.save(user);
		return " User details  with ID is updated" + persistentUser.getId();

	}

	@Override
	public String deleteUser(User newUser) {
		if(userRepo.existsById(newUser.getId()))	
		{
			userRepo.delete(newUser);
			return "user deleted successfully";
		}
		return "user does not exist";
	}

	@Override
	public User getUser(Integer userId) {
		User user = userRepo.getById(userId);
		return user;
	}

}
