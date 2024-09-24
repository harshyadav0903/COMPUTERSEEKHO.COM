package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.entities.AgeGroup;
import com.example.entities.CourseDuration;
import com.example.repositories.AgeGroupRespository;

@Service
public class AgeGroupService  
{
	@Autowired
	AgeGroupRespository repository;
	
	public List<AgeGroup>getAgeGroup()
	{
		return (List<AgeGroup>) repository.findAll();
	}

	public AgeGroup addAgeGroup(AgeGroup group) {
		// TODO Auto-generated method stub
		return repository.save(group);
	}
	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}
	public Optional<AgeGroup> getAgeGroup(int id)
	{
		return  repository.findById(id);
	}

	

}
