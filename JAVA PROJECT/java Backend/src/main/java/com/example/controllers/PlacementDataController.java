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

import com.example.entities.PlacementData;
import com.example.services.PlacementDataService;


@RestController
@CrossOrigin("*")
@RequestMapping("api/placementdata")
public class PlacementDataController 
{
		@Autowired
	    public PlacementDataService service;
		
		@GetMapping("/bybatch/{batchid}")
	    public ResponseEntity<List<PlacementData>> getBatchPlacement(@PathVariable int batchid) 
	    {
	        List<PlacementData> PlacementDataLists = service.getPlacementbyBatch(batchid);
	        return ResponseEntity.ok(PlacementDataLists);
	    }
		

	    @GetMapping("/Listall")
	    public ResponseEntity<List<PlacementData>> getAllPlacementDatas() 
	    {
	        List<PlacementData> PlacementDataLists = service.getAllPlacementDatas();
	        return ResponseEntity.ok(PlacementDataLists);
	    }
	    
	    
	    @GetMapping("getbyid/{id}")
	    public ResponseEntity<Optional<PlacementData>> getPlacementDataById(@PathVariable int id) 
	    {
	        Optional<PlacementData> PlacementData = service.GetbyId(id);
	        return ResponseEntity.ok(PlacementData);
	    }
	    
	    @PostMapping("/createPlacementData")
	    public ResponseEntity<String> addPlacementData(@RequestBody PlacementData data) 
	    {
	        try 
	        {
	            service.addPlacementData(data);
	            return ResponseEntity.ok("Staff member added successfully");
	        } 
	        catch (Exception e) 
	        {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding staff member");
	        }
	    }



	    @DeleteMapping("/{id}")
	    public ResponseEntity<Void> deletePlacementData(@PathVariable int id) {
	        service.deletePlacementData(id);
	        return ResponseEntity.noContent().build();
	    }
	    @DeleteMapping("/DeleteAll")
	    public ResponseEntity<String> deleteAllPlacementDatas() {
	    	service.deleteAllPlacementDatas();
	    	return ResponseEntity.ok("Records all deleted Successfully");
	    }
	    
//	    @PutMapping("/{id}")
//		 public void updatePlacementData(@RequestBody PlacementData stud,@PathVariable int id)
//		 {
//			service.updatePlacementData(stud,id);
//		 }
	}

