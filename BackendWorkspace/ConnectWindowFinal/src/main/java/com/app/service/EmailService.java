package com.app.service;

import com.app.pojos.EmailDetails;

public interface EmailService {
	 
    // Method
    // To send a simple email
    String sendSimpleMail(EmailDetails details);
 
    // Method
    // To send an email with attachment
    String sendMailWithAttachment(EmailDetails details);
}
