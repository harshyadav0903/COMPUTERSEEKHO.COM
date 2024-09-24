package com.example.controllers;

import java.sql.Date;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Batch;
import com.example.services.BatchService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/Batch")
public class BatchController {
	
		@Autowired
		private BatchService Service;
		
		
		@GetMapping(value="/get")
		public List<Integer> getBatchId()
		{
			return Service.getBatchID();
		}

	    @PostMapping(value="/create")
	    public ResponseEntity<Batch> createBatch(@RequestBody Batch Batch) 
	    {
	        Batch createdBatch = Service.addBatch(Batch);
	        return ResponseEntity.status(HttpStatus.CREATED).body(createdBatch);
	    }
	    @GetMapping(value = "/ListAll")
		 public List<Batch> ListAll()
		 {
			  return Service.getBatch(); 
			
		 }
		
		 @GetMapping(value = "/{id}")
		 public Optional<Batch> getCours(@PathVariable int id)
		 {
			Optional<Batch> p=Service.getBatch(id);
			return p;
		 }
		
		 @DeleteMapping(value = "/{id}")
		 public void remove(@PathVariable int id)
		 {
			Service.delete(id);
		 }

		 
		 
			/*
			 * @PutMapping("/updateBatchDetails") public ResponseEntity<String>
			 * updateBatchDetails(@RequestBody BatchDetailsRequest request) {
			 * Service.updateBatchDetails(request.getBatchId(), request.getBatchName(),
			 * request.getBatchYear(), request.getBatchLogo(), request.getStartDate(),
			 * request.getEndDate(), request.getCourseId(), request.isActive(),
			 * request.getFinalPresentationDate(), request.getCoverPhoto()); return
			 * ResponseEntity.ok("Batch details updated successfully"); }
			 */
}
