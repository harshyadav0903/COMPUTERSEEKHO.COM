package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.entities.PlacementVacancy;

public interface PlacementRepository extends JpaRepository<PlacementVacancy,Integer>
{
	@Query(value="Select Placementvacancyid from Placement_Vacancy" , nativeQuery=true)
	List<Integer> getPlacementVacancyID();

}
