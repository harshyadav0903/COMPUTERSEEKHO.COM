package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Location;
import com.example.repositories.LocationRepository;

@Service
public class LocationService {

	@Autowired
	LocationRepository repository;
	
	public List<Location> getLocation() {
		// TODO Auto-generated method stub
		return (List<Location>) repository.findAll();
	}

	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	
	public Optional<Location> getLocation(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	
	public Location addLocation(Location c) {
		// TODO Auto-generated method stub
		return repository.save(c);
	}


}
