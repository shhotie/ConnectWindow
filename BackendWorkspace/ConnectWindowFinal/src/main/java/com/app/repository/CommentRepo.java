package com.app.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Comment;

@Repository
public interface CommentRepo extends CrudRepository<Comment, Integer> {

	Comment save(Comment comment);
	
//	 @Query("SELECT TOP 3 c FROM comments c ORDER BY timestamp DESC")
	ArrayList<Comment> findByPostId(Integer postId);
	
//	 @Query("SELECT p FROM posts p order by time_stamp desc")
//	ArrayList<Comment> findAllByTimeStampDesc();
	 //SELECT TOP 3 comment_text, comment_date FROM comment ORDER BY comment_date DESC;
	
	
	
	
	
	
}
