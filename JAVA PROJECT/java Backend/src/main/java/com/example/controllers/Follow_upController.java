package com.example.controllers;

import java.util.*;

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

import com.example.services.Follow_UpService;
import com.example.entities.Follow_Up;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/follow_up")
public class Follow_upController {
	@Autowired
	public Follow_UpService followserv;
	
	@PostMapping("/create")
	public ResponseEntity<String> addFollowup(@RequestBody Follow_Up fUp){
		try {
			followserv.addfolloup(fUp);
			return ResponseEntity.ok("Follow_up Added Successfully");
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding staff member");
		}
	}
	@GetMapping("ListAll")
	public ResponseEntity<java.util.List<Follow_Up>> getallfollowUp(){
		java.util.List<Follow_Up> followlist=followserv.getallfollow();
		return ResponseEntity.ok(followlist);
	}
	@GetMapping("/{id}")
    public ResponseEntity<Follow_Up> getStaffById(@PathVariable int id) {
        Optional<Follow_Up> getone = followserv.getonefollow_up(id);
        return getone.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStaffById(@PathVariable int id) {
        followserv.delete(id);
        return ResponseEntity.ok("Staff member deleted successfully");
    }
    
	/*
	 * @PutMapping("/update/{id}") public ResponseEntity<String>
	 * Update(@PathVariable int id,@RequestBody Follow_Up followup) {
	 * followserv.update(followup); return
	 * ResponseEntity.ok("Staff member Updated successfully");     }
	 */
   
    @PutMapping("/update/{id}")
    public ResponseEntity<String> UpdateById(@PathVariable int id,@RequestBody Follow_Up followup)
    {
    	followserv.update(followup);
		return null;
    	
    }
    
    @PostMapping("/updateClosureId/{followupId}")
   public ResponseEntity<String> updateClosureId(@PathVariable int followupId)
   {
	   try 
	   {
		   followserv.updateClosureId(followupId);
		   return ResponseEntity.ok("Closure ID Updated Successfully");
		   
	   }
	   catch(Exception e)
	   {
		   return ResponseEntity.internalServerError().body("Error updating closure id:"+e.getMessage());
	   }
   }

}
