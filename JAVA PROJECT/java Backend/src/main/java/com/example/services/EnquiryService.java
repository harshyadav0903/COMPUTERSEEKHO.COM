package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Enquiry;
import com.example.repositories.EnquiryRepository;
@Service
public class EnquiryService{

	@Autowired
	EnquiryRepository repository;
	
	
	
	public List<Enquiry> getEnquiry() {
		// TODO Auto-generated method stub
		return (List<Enquiry>) repository.findAll();
	}

	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	
	public Optional<Enquiry> getEnquiry(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	
	public Enquiry addEnquiry(Enquiry c) {
		// TODO Auto-generated method stub
		return repository.save(c);
	}

	
	  public int getMaxId() 
	  { return repository.findMaxId(); }
	 
	  
	  public void update(Enquiry enquiry) {
			repository.save(enquiry);
		}
	
}
