package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entities.Enquiry;

@Repository
public interface EnquiryRepository extends JpaRepository<Enquiry, Integer> {
	
	 @Query(value = "SELECT MAX(e.Enquiry_Id) FROM Enquiry e", nativeQuery = true)
	    int findMaxId();
}
