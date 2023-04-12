package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

//JPA : Java EE specs
//user : one , parent , inverse : since DOES NOT FK
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
//@NoArgsConstructor
@ToString(exclude = {"password"})
@Getter
@Setter
public class User extends BaseEntity {
	
	

//	public List<Post> getPosts() {
//		return posts;
//	}

//	public void setPosts(List<Post> posts) {
//		this.posts = posts;
//	}
	@Column(name = "first_name", length = 20)
	private String firstName;
	@Column(name = "last_name", length = 20)
	private String lastName;
	@Column(length = 30, unique = true) // => unique constraint
	private String email;
	@Column(length = 20, nullable = false) // => NOT NULL
	private String password;
	@Column(name = "user_name", length = 20)
	private String userName;
	@Column(name = "date_of_birth")
	private LocalDate dob;
	private String qualification;
	private String userType;
	private String userPhoto;
	private String description;
	
//	@OneToMany(mappedBy = "users",
//			cascade = CascadeType.ALL, orphanRemoval = true/* ,fetch = FetchType.EAGER */)
//	private List<Post> posts = new ArrayList<>();
	
	public User() {
		super();
		
	}
	
	
	
	

	public User(Integer id,String email, String userName, String qualification, String userType, String userPhoto,
		String description) {
	super(id);
	this.email = email;
	this.userName = userName;
	this.qualification = qualification;
	this.userType = userType;
	this.userPhoto = userPhoto;
	this.description = description;
}





	public User(String firstName, String lastName, String email, String password, String userName, LocalDate dob) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.userName = userName;
		this.dob = dob;
	}

	public User(String firstName, String lastName, String email, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}

	public User(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

	public User(String firstName, String lastName, String email, String password, String userName, LocalDate dob,
			String qualification, String userType, String userPhoto, String description) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.userName = userName;
		this.dob = dob;
		this.qualification = qualification;
		this.userType = userType;
		this.userPhoto = userPhoto;
		this.description = description;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getUserPhoto() {
		return userPhoto;
	}

	public void setUserPhoto(String userPhoto) {
		this.userPhoto = userPhoto;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
//
//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	public String getUserName() {
//		return userName;
//	}
//
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}
//
//	public LocalDate getDob() {
//		return dob;
//	}
//
//	public void setDob(LocalDate dob) {
//		this.dob = dob;
//	}

//	@Override
//	public String toString() {
//		return "User [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password=" + password
//				+ ", userName=" + userName + ", dob=" + dob + "]";
//	}
//	
//	public void addPost(Post p)
//	{
//		//parent --> child
//		posts.add(p);
//		//child --> parent
//		p.setUsers(this);
//	}
//	//add a method(convenience/helper) to remove a bi dir asso. between entities
//		public void removeProduct(Post p)
//		{
//			//parent ----X---> child
//			posts.remove(p);
//			//child ----X----> parent
//			p.setUsers(null);
//			
//			
//		}
//	
//	
	

}
