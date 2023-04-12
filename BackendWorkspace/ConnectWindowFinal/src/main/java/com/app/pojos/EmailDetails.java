package com.app.pojos;



//Importing required classes
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//Annotations
@Data
@AllArgsConstructor
@NoArgsConstructor

//Class
public class EmailDetails {

 // Class data members
 private String email;
 private String msgBody;
 private String subject;
 private String attachment;
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getMsgBody() {
	return msgBody;
}
public void setMsgBody(String msgBody) {
	this.msgBody = msgBody;
}
public String getSubject() {
	return subject;
}
public void setSubject(String subject) {
	this.subject = subject;
}
public String getAttachment() {
	return attachment;
}
public void setAttachment(String attachment) {
	this.attachment = attachment;
}
//public EmailDetails() {
//	super();
//}
//public EmailDetails(String email, String msgBody, String subject, String attachment) {
//	super();
//	this.email = email;
//	this.msgBody = msgBody;
//	this.subject = subject;
//	this.attachment = attachment;
//}
@Override
public String toString() {
	return "EmailDetails [email=" + email + ", msgBody=" + msgBody + "]";
}
 

 
 
}
