package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.PRN_Generator;

@Repository
public interface PRNRepository  extends JpaRepository<PRN_Generator,Integer>
{
	
//	@Query(value="Select * from PRN_Generator",nativeQuery=true)
//	List<PRN_Generator> getPRN();
	
	 @Query(value = "SELECT * FROM PRN_Generator WHERE prn_Id = :prnId", nativeQuery = true)
	    List<PRN_Generator> findByPrnId(@Param("prnId") String prnId);


}
