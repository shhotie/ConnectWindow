package com.app.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Post;
import com.app.service.PostService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/post")
public class PostController {

	@Autowired
	PostService postService;
	
	@PostMapping
	private Post submitUserPost(@RequestBody Post post) {
		return postService.submitPostToDataBase(post);
	}
	
	@GetMapping
	private ArrayList<Post> getAllPost(){
		
		ArrayList<Post> list = postService.retrivePostFromDB();
		
		return list;
	}
	
	@GetMapping("/{userid}")
	private ArrayList<Post> getUserPost(@PathVariable("userid") Integer userId){
		return postService.getPostFromUserId(userId);
	}
	//mockito
	
	@PutMapping
	public Post updatePostDetails(@RequestBody Post post) {
		System.out.println("in update post " + post.getId());// not null
		return postService.updatePostDetails(post);
	}
	
	
	
}
