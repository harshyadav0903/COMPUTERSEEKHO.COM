package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.Company;
import com.example.repositories.CompanyRepository;

@Service

public class CompanyService {

	@Autowired
	CompanyRepository repository;
	
	
	public List<Integer>getCompanyID()
	{
		return (( List<Integer>) repository.getCompanyID());
	}
	
	public List<Company> getCompany() {
		// TODO Auto-generated method stub
		return (List<Company>) repository.findAll();
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	public Optional<Company> getCompany(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	public Company addCompany(Company c) {
		// TODO Auto-generated method stub
		return repository.save(c);
	}
	public Company update(Company comp) {
		return repository.save(comp); 
	}

}
