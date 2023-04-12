package com.app.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.User;

public interface UserRepo extends JpaRepository<User, Integer> {
//	User authenticateUser(String email, String pwd); 1
	Optional<User> findByEmailAndPassword(String em,String pass);
	
	//User update(User user);
	//User saveOrUpdate(User u);
//	User registerNewUser(User user); inherited from CrudRepository : save
}

