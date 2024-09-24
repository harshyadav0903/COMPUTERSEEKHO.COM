package com.example.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.entities.Company;
import com.example.services.CompanyService;


@RestController
@CrossOrigin("*")
@RequestMapping("api/Company")
public class CompanyController 
{
	//@Value("${upload-dir}")
    private String uploadDir;
	
	@Autowired
	private CompanyService Service;
	

	@GetMapping("/get")
	public List<Integer>getAllCompanyID()
	{
		return (( List<Integer>) Service.getCompanyID());
	}
	

    @PostMapping(value="/create")
    public ResponseEntity<Company> createCompany(@RequestBody Company Company) {
    	System.out.println("logo is\t"+Company.getLogo());
        Company createdCompany = Service.addCompany(Company);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCompany);
    }
    @GetMapping(value = "/ListAll")
	 public List<Company> ListAll()
	 {
		  return Service.getCompany(); 
	 }
	 @GetMapping(value = "/{id}")
	 public Optional<Company> getCours(@PathVariable int id)
	 {
		Optional<Company> p=Service.getCompany(id);
		return p;
	 }
	
	 @DeleteMapping(value = "delete/{id}")
	 public void remove(@PathVariable int id)
	 {
		Service.delete(id);
	 }
	 @PutMapping("update/{id}")
	 public Company update(@PathVariable int id,@RequestBody Company comp)
	 {
		comp.setCompany_Id(id);
		Company p=Service.update(comp);
		return p;
	 }
	 @PostMapping("/upload")
	    @ResponseBody
	    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
	        try {
	            // Get the file name and build the target file path
	            String fileName = file.getOriginalFilename();
	            Path targetPath = Path.of(uploadDir, fileName);

	            // Copy the file to the target directory
	            Files.copy(file.getInputStream(), targetPath, StandardCopyOption.REPLACE_EXISTING);

	            // You can now save the complete path to the database if needed
	            String fileUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
	                    .path("/uploads/")
	                    .path(fileName)
	                    .toUriString();

	            // You can return the file URL or any other response as needed
	            return ResponseEntity.ok("File uploaded successfully. File URL: " + fileUrl);
	        } catch (IOException e) {
	            e.printStackTrace();
	            return ResponseEntity.status(500).body("Failed to upload the file.");
	        }
	    }


}
