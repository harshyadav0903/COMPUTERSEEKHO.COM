package com.example.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.entities.EnquirySource;
import com.example.services.EnquirySourceService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/enquirysources")
public class EnquirySourceController {
	@Autowired
    private EnquirySourceService enquirySourceService;

    @GetMapping("/ListAll")
    public List<EnquirySource> getAllEnquirySources() {
        return enquirySourceService.getAllEnquirySources();
    }

    @GetMapping("/{id}")
    public Optional<EnquirySource> getEnquirySourceById(@PathVariable int id) {
        return enquirySourceService.getEnquirySourceById(id);
    }

    @PostMapping("/create")
    public EnquirySource saveEnquirySource(@RequestBody EnquirySource enquirySource) {
        return enquirySourceService.saveEnquirySource(enquirySource);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteEnquirySource(@PathVariable int id) {
        enquirySourceService.deleteEnquirySource(id);
    }
}
