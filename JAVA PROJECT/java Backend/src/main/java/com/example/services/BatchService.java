package com.example.services;
import java.util.List;
import java.util.Optional;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Batch;
import com.example.repositories.BatchRepository;

@Service
public class BatchService {

	@Autowired
	BatchRepository repository;
	
	public List<Integer>getBatchID()
	{
		return ((List<Integer>)repository.getAllBatchId());
	}

	public List<Batch> getBatch() {
		// TODO Auto-generated method stub
		return (List<Batch>) repository.findAll();
	}

	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}

	public Optional<Batch> getBatch(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

	public Batch addBatch(Batch c) {

		return repository.save(c);
	}

	/*
	 * public void updateBatchDetails(BatchDetailsRequest request) {
	 * repository.updateBatchDetails(request.getBatchId(), request.getBatchName(),
	 * request.getBatchYear(), request.getBatchLogo(), request.getStartDate(),
	 * request.getEndDate(), request.getCourseId(), request.isActive(),
	 * request.getFinalPresentationDate(), request.getCoverPhoto()); }
	 */

}
