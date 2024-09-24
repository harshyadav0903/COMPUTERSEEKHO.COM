package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.example.entities.Company;

public interface CompanyRepository extends JpaRepository<Company,Integer>
{
	
	@Query (value="select company_Id from Company",nativeQuery=true)
	List<Integer>getCompanyID();
	
}
