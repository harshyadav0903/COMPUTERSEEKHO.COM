package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.example.entities.Location;
import com.example.services.LocationService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/Location")
public class LocationController {
	
		@Autowired
		private LocationService Service;

	    @PostMapping(value="/create")
	    public ResponseEntity<Location> createLocation(@RequestBody Location location) {
	        Location createdLocation = Service.addLocation(location);
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdLocation);
	    }
	    @GetMapping(value = "/ListAll")
		 public List<Location> ListAll()
		 {
			  return Service.getLocation(); 
			
		 }
		
		 @GetMapping(value = "/{id}")
		 public Optional<Location> getCours(@PathVariable int id)
		 {
			Optional<Location> p=Service.getLocation(id);
			return p;
		 }
		
		 @DeleteMapping(value = "/{id}")
		 public void remove(@PathVariable int id)
		 {
			Service.delete(id);
		 }

}
