package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.PRN_Generator;
import com.example.entities.Student;
import com.example.services.PRNService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/prn")
public class PRNController
{
	@Autowired
	PRNService service;
	
	@GetMapping("/get/{prnId}")
	public ResponseEntity<List<PRN_Generator>> getPrn(@PathVariable String prnId) {
	    List<PRN_Generator> prnList = service.getallPRN(prnId);
	    
	    if (prnList.isEmpty()) {
	        return ResponseEntity.notFound().build();
	    }

	    return ResponseEntity.ok(prnList);
	}
	
	
	@PostMapping(value = "create/{id1}/{id2}")
	public String createPRN(@PathVariable int id1, @PathVariable int id2) 
	{
	    return service.generatePRNDAC(id1,id2);
	}
	
	
	
	@GetMapping("/allprn")
    public ResponseEntity<List<PRN_Generator>> getAllStudents() {
        List<PRN_Generator> PRNList = service.getAllPRNGenarator();
        return ResponseEntity.ok(PRNList);
    }
	
    @GetMapping("/{prnid}")
    public ResponseEntity<Optional<PRN_Generator>> getStudentById(@PathVariable int id) {
        Optional<PRN_Generator> getprn = service.GetGeneratorbyId(id);
        return ResponseEntity.ok(getprn);
    }
	
//	public ResponseEntity<String> createPRN(@PathVariable int id1, @PathVariable int id2) {
//        String generatedPRN = service.generatePRNDAC(id1, id2);
//        return ResponseEntity.ok(generatedPRN);
	

}
