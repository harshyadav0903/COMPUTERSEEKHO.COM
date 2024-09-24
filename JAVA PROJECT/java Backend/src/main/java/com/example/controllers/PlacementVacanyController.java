package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.example.entities.PlacementVacancy;
import com.example.entities.Student;
import com.example.services.PlacementVacancyService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/vacancy")
public class PlacementVacanyController 
{
	@Autowired
	PlacementVacancyService service;
	
	
	@GetMapping(value="/get")
	public List<Integer> getPlacementVacancy()
	{
		return service.getAllPlacementVacancy();
	}
	
	
	@PostMapping(value="/createvacancy")
	public PlacementVacancy createVacancy(@RequestBody PlacementVacancy vacancy)
	{
		return service.addPlacementVacancy(vacancy) ;
	}
	
	@GetMapping(value="/getvacancy")
	public ResponseEntity<List<PlacementVacancy>> getAllVacancy() {
        List<PlacementVacancy> getVacancylist = service.getAllPlacementVacancyDetails();
        return ResponseEntity.ok(getVacancylist);
    }
	
	@GetMapping("/getbyid/{id}")
    public ResponseEntity<Optional<PlacementVacancy>> getplacementvacancy(@PathVariable int id) {
        Optional<PlacementVacancy> vacancy = service.getPlacementVacancyById(id);
        return ResponseEntity.ok(vacancy);
    }
    
	 @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deletevacancy(@PathVariable int id) {
	        service.deleteVacancybyid(id);
	        return ResponseEntity.noContent().build();
	    }
	 
	 
	 @DeleteMapping("/DeleteAll")
	    public ResponseEntity<String> deleteAllVacancy() {
	    	service.deleteAllVacancy();
	    	return ResponseEntity.ok("Records all deleted Successfully");
	    }
	 


}
