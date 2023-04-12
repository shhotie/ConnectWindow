package com.app.pojos;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name="posts")
public class Post extends BaseEntity{


	
	private Integer userId;
	private String userName;
	private String postContent;
	private Timestamp timeStamp;
	private int likeCount;
	@Column(length = 1000)
	private String postImageUrl;
	
//	@ManyToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "id")
//	private User users;
//	
	public Post() {
		super();
		
	}

public Post( Integer userId, String userName, String postContent, Timestamp timeStamp, int likeCount,
		String postImageUrl) {
	super();
	this.userId = userId;
	this.userName = userName;
	this.postContent = postContent;
	this.timeStamp = timeStamp;
	this.likeCount = likeCount;
	this.postImageUrl = postImageUrl;
}

public Integer getUserId() {
	return userId;
}

public void setUserId(Integer userId) {
	this.userId = userId;
}

public String getUserName() {
	return userName;
}

public void setUserName(String userName) {
	this.userName = userName;
}

public String getPostContent() {
	return postContent;
}

public void setPostContent(String postContent) {
	this.postContent = postContent;
}

public Timestamp getTimeStamp() {
	return timeStamp;
}

public void setTimeStamp(Timestamp timeStamp) {
	this.timeStamp = timeStamp;
}

public int getLikeCount() {
	return likeCount;
}

public void setLikeCount(int likeCount) {
	this.likeCount = likeCount;
}

public String getPostImageUrl() {
	return postImageUrl;
}

public void setPostImageUrl(String postImageUrl) {
	this.postImageUrl = postImageUrl;
}
	
	
	
	
	
	
}
