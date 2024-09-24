package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Course;
import com.example.entities.Qualification;
import com.example.repositories.QualificationRepository;


@Service
public class QualificationService  
{
	@Autowired
	QualificationRepository repository;
	
	public List<Qualification>getQualification()
	{
		return (List<Qualification>) repository.findAll();
	}

	public Qualification addQualification(Qualification group) {
		// TODO Auto-generated method stub
		return repository.save(group);
	}
	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}
	public Optional<Qualification> getQualification(int id) {
		
		return repository.findById(id);
	}
	

}
