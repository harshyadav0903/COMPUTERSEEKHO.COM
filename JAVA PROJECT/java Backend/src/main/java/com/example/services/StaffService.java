package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Staff;
import com.example.repositories.StaffRepository;



@Service
public class StaffService {
	@Autowired
	StaffRepository repo;

	public void addStaff(Staff p) {
	    try {
	        repo.save(p);
	        System.out.println("Staff added successfully!");
	    } catch (Exception e) {
	        System.err.println("Error adding staff: " + e.getMessage());
	        e.printStackTrace();
	    }
	}

	public List<Staff> getStaffs() {
		return repo.findAll();
	
	}
	
	public void delete(int id) {
		repo.deleteById(id);
	}
	public Optional<Staff> getStaff(int id) {
		// TODO Auto-generated method stub
		return repo.findById(id);
	}
//	
//	public int logIn(Staff s) 
//	{
//		
//		 Integer roleId = repo.LogIn(s.getEmail(), s.getPassword());
//	     return (roleId != null) ? roleId : -1;
//	}

	public void update(Staff sf) {
		repo.save(sf);
	}
	
//	
	 public Optional<Staff> loginUser(String email, String password) {
	        return repo.loginUser(email, password);
	    }
	
	
}
