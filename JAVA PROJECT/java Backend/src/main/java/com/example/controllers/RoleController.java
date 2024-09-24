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
import com.example.entities.Role;
import com.example.services.RoleService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/Role")
public class RoleController 
{
	@Autowired
	private RoleService service;
	
	
	@GetMapping(value="/ListAll")
	public List<Role>ListAll()
	{
		return service.getRole();
	}
	
	@PostMapping(value = "/createrole")
	public Role createDuration(@RequestBody Role group) {
	    return service.addRole(group);
	}
	
	@DeleteMapping(value = "delete/{id}")
	public void remove(@PathVariable int id) {
	    service.delete(id);
	}


}
