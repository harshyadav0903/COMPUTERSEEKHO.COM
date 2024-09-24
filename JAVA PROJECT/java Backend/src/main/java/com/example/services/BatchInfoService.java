package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.BatchInfo;
import com.example.repositories.BatchInfoRepository;

@Service
public class BatchInfoService {

	@Autowired
	BatchInfoRepository repository;
	
	public List<BatchInfo> getBatchInfo() {
		// TODO Auto-generated method stub
		return (List<BatchInfo>) repository.findAll();
	}

	
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	
	public Optional<BatchInfo> getBatchInfo(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	
	public BatchInfo addBatchInfo(BatchInfo c) {
		// TODO Auto-generated method stub
		return repository.save(c);
	}


}
