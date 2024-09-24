package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.entities.PRN_Generator;
import com.example.entities.PlacementVacancy;
import com.example.repositories.PlacementRepository;

@Service
public class PlacementVacancyService 
{
	
	@Autowired
	PlacementRepository repository;
	
	
	public List<Integer> getAllPlacementVacancy()
	{
		return ((List<Integer>) repository.getPlacementVacancyID());
	}
	
	 public List<PlacementVacancy> getAllPlacementVacancyDetails() 
	 {
	        return repository.findAll();
	 }
	 
	 public Optional<PlacementVacancy> getPlacementVacancyById(int id)
	 {
		 return repository.findById(id);
	 }
	 	 
	 public PlacementVacancy addPlacementVacancy(PlacementVacancy vacancy)
	 {
		 return repository.save(vacancy);
	 }
	 
	 public void deleteAllVacancy() {
	        repository.deleteAll();
	    }
	 
	  public void deleteVacancybyid(int id) {
	        repository.deleteById(id);
	    }
	 
	 

}
