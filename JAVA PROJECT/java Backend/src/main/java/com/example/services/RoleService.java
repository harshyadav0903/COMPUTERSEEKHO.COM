package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Role;
import com.example.repositories.RoleRepository;


@Service
public class RoleService  
{
	@Autowired
	RoleRepository repository;
	
	public List<Role>getRole()
	{
		return (List<Role>) repository.findAll();
	}

	public Role addRole(Role group) {
		// TODO Auto-generated method stub
		return repository.save(group);
	}
	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	

}
