package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Follow_Up;
import com.example.repositories.Follow_UpRepository;

@Service
public class Follow_UpService {
	@Autowired
	Follow_UpRepository followrepo;
	public void addfolloup(Follow_Up f) {
		followrepo.save(f);
		System.out.println("Follow Up given successfully");
	}
	public List<Follow_Up> getallfollow(){
		return followrepo.findAll();
	}
	public void delete(int id) {
		followrepo.deleteById(id);
	}
	public Optional<Follow_Up> getonefollow_up(int id){
		return followrepo.findById(id);
	}
	
	public void update(Follow_Up followup) {
		followrepo.save(followup);
	}
	
	public void updateClosureId(int followUpId) 
	{
		 followrepo.updateClosureId(followUpId);
	}
}
