package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.PlacementData;

public interface PlacementDataRepository extends JpaRepository<PlacementData, Integer>
{

	@Query(value="Select * from placement_data where batchid=:batchid",nativeQuery=true)
	List<PlacementData>getPlacementbyBatchid(int batchid);
}
