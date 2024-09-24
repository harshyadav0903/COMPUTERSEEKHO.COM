package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Closure;
import com.example.repositories.ClosureRepository;

@Service
public class ClosureService  
{
	@Autowired
	ClosureRepository repository;
	
	public List<Closure>getClosure()
	{
		return (List<Closure>) repository.findAll();
	}

	public Closure addClosure(Closure group) {
		// TODO Auto-generated method stub
		return repository.save(group);
	}
	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	

}