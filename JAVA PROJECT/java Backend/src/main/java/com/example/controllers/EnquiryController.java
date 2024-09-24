package com.example.controllers;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Enquiry;
import com.example.services.EnquiryService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/enquiry")
public class EnquiryController {
	@Autowired
	private EnquiryService Service;

    @PostMapping(value="/create")
    @CrossOrigin("*")
    public ResponseEntity<Enquiry> createEnquiry(@RequestBody Enquiry Enquiry) {
        Enquiry createdEnquiry = Service.addEnquiry(Enquiry);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEnquiry);
    }
    @GetMapping(value = "/ListAll")
	 public List<Enquiry> ListAll()
	 {
		  return Service.getEnquiry(); 
	 }
	 @GetMapping(value = "/{id}")
	 public Optional<Enquiry> getCours(@PathVariable int id)
	 {
		Optional<Enquiry> p=Service.getEnquiry(id);
		return p;
	 }
	
	 @DeleteMapping(value = "/{id}")
	 public void remove(@PathVariable int id)
	 {
		Service.delete(id);
	 }

		  @GetMapping(value = "/getMaxid") 
		  public int getId() { int
		  p=Service.getMaxId();
		  return p; }
		 
		  @PutMapping("/update/{id}")
		  public ResponseEntity<String> handlePutRequest(@PathVariable int id,@RequestBody Enquiry enquiry) 
		  {
		  	Service.update(enquiry);
		  	 return ResponseEntity.ok("PUT request handled successfully");
		  }
}
