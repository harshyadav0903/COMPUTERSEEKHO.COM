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
import com.example.entities.AgeGroup;
import com.example.entities.CourseDuration;
import com.example.services.AgeGroupService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/AgeGroup")
public class AgeGroupController 
{
	@Autowired
	private AgeGroupService service;
	
	
	@GetMapping(value="/ListAll")
	public List<AgeGroup>ListAll()
	{
		return service.getAgeGroup();
	}
	
	@GetMapping(value="/{id}")
	public Optional<AgeGroup> getById(@PathVariable int id)
	{
		return service.getAgeGroup(id);
	}
	
	@PostMapping(value = "/createage")
	public AgeGroup createAgeGroup(@RequestBody AgeGroup group) {
	    return service.addAgeGroup(group);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public void remove(@PathVariable int id) {
	    service.delete(id);
	}


}
