package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entities.PlacementData;
import com.example.repositories.PlacementDataRepository;

@Service
public class PlacementDataService 
{
	@Autowired
	PlacementDataRepository repository;
	
	
	public List<PlacementData> getPlacementbyBatch(int batchid)
	{
		return repository.getPlacementbyBatchid(batchid);
	}

    public List<PlacementData> getAllPlacementDatas() {
        return repository.findAll();
    }

    
    
    
    public Optional<PlacementData> GetbyId(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

    public  PlacementData addPlacementData(PlacementData data) 
    {
        return repository.save(data);
    }

    public void deletePlacementData(int id) 
    {
    	repository.deleteById(id);
    }
    
    
    public Optional<PlacementData> getPlacementData(int id) 
    {
		return repository.findById(id);
	}
    
    
    public void deleteAllPlacementDatas() 
    {
    	repository.deleteAll();
    }

}
