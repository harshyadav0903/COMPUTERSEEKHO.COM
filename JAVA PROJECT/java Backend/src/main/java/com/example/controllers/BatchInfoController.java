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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.BatchInfo;
import com.example.services.BatchInfoService;

@RestController
@CrossOrigin("http://127.0.0.1:5500")
@RequestMapping("api/BatchInfo")
public class BatchInfoController {
	
		@Autowired
		private BatchInfoService Service;

	    @PostMapping(value="/create")
	    public ResponseEntity<BatchInfo> createBatchInfo(@RequestBody BatchInfo BatchInfo) {
	        BatchInfo createdBatchInfo = Service.addBatchInfo(BatchInfo);
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdBatchInfo);
	    }
	    @GetMapping(value = "/ListAll")
		 public List<BatchInfo> ListAll()
		 {
			  return Service.getBatchInfo(); 
			
		 }
		
		 @GetMapping(value = "/{id}")
		 public Optional<BatchInfo> getCours(@PathVariable int id)
		 {
			Optional<BatchInfo> p=Service.getBatchInfo(id);
			return p;
		 }
		
		 @DeleteMapping(value = "/{id}")
		 public void remove(@PathVariable int id)
		 {
			Service.delete(id);
		 }


}
