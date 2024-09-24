package com.example.controllers;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.entities.Qualification;
import com.example.services.QualificationService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/Qualification")
public class QualificationController 
{
	@Autowired
	private QualificationService service;
	
	
	@GetMapping(value="/ListAll")
	public List<Qualification>ListAll()
	{
		return service.getQualification();
	}
	
	@PostMapping(value = "/createqualification")
	public Qualification createDuration(@RequestBody Qualification group) {
	    return service.addQualification(group);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public void remove(@PathVariable int id) {
	    service.delete(id);
	}
	 @GetMapping(value = "/{id}")
	 public Optional<Qualification> getCours(@PathVariable int id)
	 {
		Optional<Qualification> p=service.getQualification(id);
		System.out.println(p);
		return p;
	 }
}
