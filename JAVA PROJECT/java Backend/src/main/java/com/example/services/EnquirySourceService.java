package com.example.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.repositories.EnquirySourceRepository;
import com.example.entities.EnquirySource;

import java.util.List;
import java.util.Optional;


@Service
public class EnquirySourceService {
	 @Autowired
	    private EnquirySourceRepository enquirySourceRepository;

	    public List<EnquirySource> getAllEnquirySources() {
	        return enquirySourceRepository.findAll();
	    }

	    public Optional<EnquirySource> getEnquirySourceById(int id) {
	        return enquirySourceRepository.findById(id);
	    }

	    public EnquirySource saveEnquirySource(EnquirySource enquirySource) {
	        return enquirySourceRepository.save(enquirySource);
	    }

	    public void deleteEnquirySource(int id) {
	        enquirySourceRepository.deleteById(id);
	    }
}
