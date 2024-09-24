package com.example.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Staff;

@Repository
public interface StaffRepository  extends JpaRepository<Staff,Integer>{
	
	@Query("SELECT s FROM Staff s WHERE s.email = :email AND s.password = :password")
    Optional<Staff> loginUser(@Param("email") String email, @Param("password") String password);
	
//	@Query("SELECT new com.example.entities.Staff (s.email, s.password, s.role_id) FROM Staff s WHERE s.email = :email AND s.password = :password")
//	Optional<Staff> loginUser(@Param("email") String email, @Param("password") String password);

	
	
	 
//	 @Query("SELECT s.role_id FROM Staff s WHERE s.email = :email AND s.password = :password")
//	    Integer LogIn(@Param("email") String email, @Param("password") String password);



}
