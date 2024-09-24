package com.example.controllers;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.entities.Designation;
import com.example.services.DesignationService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/designation")
public class DesignationController 
{
	@Autowired
	private DesignationService service;
	
	
	@GetMapping(value="/ListAll")
	public List<Designation>ListAll()
	{
		return service.getDesignation();
	}
	
	@PostMapping(value = "/createage")
	public Designation createDesignation(@RequestBody Designation group) {
	    return service.addDesignation(group);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public void remove(@PathVariable int id) {
	    service.delete(id);
	}


}
