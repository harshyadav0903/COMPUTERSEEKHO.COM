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
import com.example.entities.CourseDuration;
import com.example.services.DurationService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/Duration")
public class DurationController 
{
	@Autowired
	private DurationService service;
	
	
	@GetMapping(value="/ListAll")
	public List<CourseDuration>ListAll()
	{
		return service.getDuration();
	}
	
	@PostMapping(value = "/createduration")
	public CourseDuration createDuration(@RequestBody CourseDuration group) {
	    return service.addDuration(group);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public void remove(@PathVariable int id) {
	    service.delete(id);
	}
	@GetMapping(value="/{id}")
	public Optional<CourseDuration> getById(@PathVariable int id)
	{
		return service.getDuintidration(id);
	}

}
