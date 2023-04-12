package com.app.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Integer> {

	Post save(Post post);
	
	ArrayList<Post> findAll();
	
	 @Query("SELECT p FROM posts p order by time_stamp desc")
	ArrayList<Post> findAllByTimeStampDesc();
	
	ArrayList<Post> findByUserId(Integer userId);
	
	
	
	
}
