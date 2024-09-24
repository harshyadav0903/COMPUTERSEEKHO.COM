package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Follow_Up;

import jakarta.transaction.Transactional;
@Repository
public interface Follow_UpRepository extends JpaRepository<Follow_Up,Integer> {
	
	@Modifying
    @Transactional
    @Query("UPDATE Follow_Up f SET f.closure_Id = 1 WHERE f.followUp_id = :followUpId")
    void updateClosureId(@Param("followUpId") int followUpId);

}