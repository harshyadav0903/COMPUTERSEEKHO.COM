package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Location;
@Repository
public interface LocationRepository extends JpaRepository<Location,Integer>{

	
}
