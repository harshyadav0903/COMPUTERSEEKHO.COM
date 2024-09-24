package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.CourseDuration;
import com.example.repositories.DurationRespository;


@Service
public class DurationService  
{
	@Autowired
	DurationRespository repository;
	
	public List<CourseDuration>getDuration()
	{
		return (List<CourseDuration>) repository.findAll();
	}
	public Optional<CourseDuration> getDuintidration(int id)
	{
		return  repository.findById(id);
	}

	public CourseDuration addDuration(CourseDuration group) {
		// TODO Auto-generated method stub
		return repository.save(group);
	}
	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	

}
