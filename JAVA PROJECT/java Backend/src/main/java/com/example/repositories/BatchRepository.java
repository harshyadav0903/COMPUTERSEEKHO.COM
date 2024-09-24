package com.example.repositories;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Batch;

import jakarta.transaction.Transactional;

import java.util.Date;
import java.util.List;
@Repository
public interface BatchRepository extends CrudRepository<Batch, Integer> 
{
	
	@Query(value="Select batch_id from Batch",nativeQuery=true)
	List<Integer>getAllBatchId();
	
	
	
	
	

	/*
	 * @Modifying
	 * 
	 * @Transactional
	 * 
	 * @Query("UPDATE Batch b SET b.Batch_Name = :batchName, b.Batch_Year = :batchYear, "
	 * +
	 * "b.Batch_Logo = :batchLogo, b.Start_Date = :startDate, b.End_Date = :endDate, "
	 * + "b.Course_Id = :courseId, b.Is_Active = :isActive, " +
	 * "b.FinalPresentationDate = :finalPresentationDate, b.Cover_Photo = :coverPhoto "
	 * + "WHERE b.Batch_Id = :batchId") void updateBatchDetails(@Param("batchId")
	 * int batchId,
	 * 
	 * @Param("batchName") String batchName,
	 * 
	 * @Param("batchYear") Date batchYear,
	 * 
	 * @Param("batchLogo") String batchLogo,
	 * 
	 * @Param("startDate") Date startDate,
	 * 
	 * @Param("endDate") Date endDate,
	 * 
	 * @Param("courseId") int courseId,
	 * 
	 * @Param("isActive") boolean isActive,
	 * 
	 * @Param("finalPresentationDate") Date finalPresentationDate,
	 * 
	 * @Param("coverPhoto") String coverPhoto);
	 */
	}
