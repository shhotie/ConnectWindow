package com.app.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.pojos.EmailDetails;
import com.app.pojos.User;
import com.app.service.EmailService;
import com.app.service.OTPService;

// Annotation
@RestController
@CrossOrigin(origins="http://localhost:3000")
// Class
public class EmailController {
	 
    @Autowired 
    private EmailService emailService;

    @Autowired
    public OTPService otpService;
    
    @PostMapping("/sendMail")
    public String
    sendMail(@RequestBody EmailDetails email,HttpSession session, Model map,
    		HttpServletRequest request,HttpServletResponse response) {;
    	int code = otpService.generateOTP("OTP");
    	String msg = "Hello,\n\nPlease use the verification code below on the Connect Window Website for registration."+
    	    	"\n\n"+code
    	    	+"\n\nThankyou.";
    
    	EmailDetails em = new EmailDetails();
    	em.setEmail(email.getEmail());
    	em.setAttachment("");
    	em.setSubject("Register to Connect Window");
    	em.setMsgBody(msg);
    	
    	request.getSession().setAttribute("serverOtp",code );
  	
    	if(session.isNew()){
    	    System.out.println("New"); // ok return new !
    	    System.out.println(session.getId()); // A87AC018FD8DDA33B023FAA6C1C2D71C
    	}

    	System.out.println(session.getAttribute("serverOtp"));
    
        String status
            = emailService.sendSimpleMail(em);
        
        return status;
    }
    
    @PostMapping(value ="/verifyotp")
    public @ResponseBody String validateOtp(@RequestBody  ApiResponse userotp){
    	
    		final String SUCCESS = "Entered Otp is valid";
    		final String FAIL = "Entered Otp is NOT valid. Please Retry!";
    		 Integer otp = userotp.getValue();
    		if(otp >= 0){
    			
    		  int serverOtp = otpService.getOtp("OTP");
    		    if(serverOtp > 0){
    		      if(otp == serverOtp){
    		          otpService.clearOTP("OTP");
    		
                      return ("Entered Otp is valid");
                    } 
    		        else {
                        return SUCCESS;
                       }
                   }else {
                  return FAIL;
                   }
                 }else {
                    return FAIL;
             }
          }
    

    
    // Sending email with attachment
    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment(
        @RequestBody EmailDetails details)
    {
        String status
            = emailService.sendMailWithAttachment(details);
 
        return status;
    }
    

}
