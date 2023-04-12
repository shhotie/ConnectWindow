package com.app.pojos;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="comments")
public class Comment {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	
	@Column(name = "comment_id")
	private int commentId;
	@Column(name = "user_id")
	private int userId;
	@Column(name = "post_id")
	private int postId;
	private Timestamp timestamp;
	private String comment;
	
	public Comment() {
		super();
		
	}

	public Comment(int id, int userId, int postId, Timestamp timestamp, String comment) {
		super();
		this.commentId = id;
		this.userId = userId;
		this.postId = postId;
		this.timestamp = timestamp;
		this.comment = comment;
	}

	

	public int getCommentId() {
		return commentId;
	}

	public void setCommentId(int commentId) {
		this.commentId = commentId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public Timestamp getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "Comment [id=" + commentId + ", userId=" + userId + ", postId=" + postId + ", timestamp=" + timestamp
				+ ", comment=" + comment + "]";
	}
	
	
	
	
}
