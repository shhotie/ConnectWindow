package com.app.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.User;
import com.app.service.UserService;
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;

	public UserController() {
		System.out.println("in def ctor " + getClass());
	}

	@PostMapping("/login")
	public User processLoginForm(@RequestBody User user1) {
		try {
			User user = userService.validateUser(user1.getEmail(), user1.getPassword());
			System.out.println(user.getFirstName());
			System.out.println("logged in");
			System.out.println( user.getEmail());
			
			return user;

		} catch (RuntimeException e) {
			System.out.println("err in " + getClass() + " " + e);
			
			return null;
		}
	}
	@GetMapping("/logout")
	public String userLogout(HttpSession session,Model map,
			HttpServletRequest rq,HttpServletResponse resp)
	{
		System.out.println("in user logout");
		session.invalidate();
		
		return "Logged out successful";
	}
	
	@PostMapping("/signup")
	public String registerUser(@RequestBody User user) {
		System.out.println("in process signup form " +user);//{}
		try {
			String s = userService.registerUser(user);
			return "successfully sign up";

		} catch (RuntimeException e) {
			System.out.println("err in " + getClass() + " " + e);
			return user.toString();
		}
	}
	@PostMapping("/update")
	public String updateUser(@RequestBody User user, Model map,HttpSession session) {
		System.out.println("in process signup form " +user);//{}
		try {
			String s = userService.updateUser(user);
			
			return s;

		} catch (RuntimeException e) {
			System.out.println("err in " + getClass() + " " + e);
			
			return "error";
		}
	}

}
