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
import com.example.entities.Closure;
import com.example.services.ClosureService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/Closure")
public class ClosureController
{
	@Autowired
	private ClosureService service;
	
	
	@GetMapping(value="/ListAll")
	public List<Closure>ListAll()
	{
		return service.getClosure();
	}
	
	@PostMapping(value = "/createclosure")
	public Closure createAgeGroup(@RequestBody Closure group) {
	    return service.addClosure(group);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public void remove(@PathVariable int id) {
	    service.delete(id);
	}


}
