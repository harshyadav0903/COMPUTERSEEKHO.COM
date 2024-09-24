package com.example.controllers;
 
// Importing required classes

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.EmailDetails;
import com.example.services.EmailService;
import com.example.services.EmailServiceImpl;
 

@RestController
@CrossOrigin("*")
public class EmailController {
 
    @Autowired 
    private EmailService emailService;
 
    
    @PostMapping("/sendMail")
    public ResponseEntity <String> sendMail(@RequestBody EmailDetails details)
    {  	System.out.println(details);    
        String status;
		
		{
			status = emailService.sendSimpleMail(details);
		
			// TODO Auto-generated catch block
	
        return ResponseEntity.ok (status);
		}
    }
 
 
    @PostMapping("/sendMailWithAttachment")
    public String sendMailWithAttachment( @RequestBody EmailDetails details)
    {
        String status= emailService.sendMailWithAttachment(details);
 
        return status;
    }
}