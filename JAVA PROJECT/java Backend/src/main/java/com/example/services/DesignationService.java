package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.example.entities.Designation;
import com.example.repositories.DesignationRepository;

@Service
public class DesignationService  
{
	@Autowired
	DesignationRepository repository;
	
	public List<Designation>getDesignation()
	{
		return (List<Designation>) repository.findAll();
	}

	public Designation addDesignation(Designation group) {
		// TODO Auto-generated method stub
		return repository.save(group);
	}
	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	

}
