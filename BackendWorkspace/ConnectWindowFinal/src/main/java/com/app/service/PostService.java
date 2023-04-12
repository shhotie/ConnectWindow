package com.app.service;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.pojos.Post;
import com.app.repository.PostRepo;

@Service
@Transactional
public class PostService {

	@Autowired
	PostRepo postRepo;
	
	@Autowired
	UserServiceImpl userService;
	
	public Post submitPostToDataBase(Post post) {
		return postRepo.save(post);
	}
	
	public ArrayList<Post> retrivePostFromDB(){

		ArrayList<Post> postList=postRepo.findAllByTimeStampDesc();
		

		return postList;
	}
	
	public ArrayList<Post> getPostFromUserId (Integer userId){
		return postRepo.findByUserId(userId);
	}
	
	public Post updatePostDetails(Post post) {
		if(postRepo.existsById(post.getId())) {
			return postRepo.save(post);
		}
		throw new ResourceNotFoundException("Invalid Post Id : Updation Failed!!!!!!!!");
	}
	

}
