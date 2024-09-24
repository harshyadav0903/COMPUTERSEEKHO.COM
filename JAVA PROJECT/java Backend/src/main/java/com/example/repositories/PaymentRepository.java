package com.example.repositories;
import org.springframework.data.repository.CrudRepository;

import com.example.entities.Payment;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer> {

	
	/*@Modifying
	  @Transactional
	@Query(value = "update Payment p SET p.student_Id = :sid, p.transaction_Id = :tid, p.date = :dt, p.amount = :amt, p.batch_Id = :bid, p.paymentTypeId = :ptid WHERE p.payment_Id = :id", nativeQuery = true)

	public void updatePayment(   @Param("sid") int sid,
            @Param("tid") String tid, 
            @Param("dt") Date dt, 
            @Param("amt") double amt, 
            @Param("bid") int bid,
            @Param("ptid") int ptid,
            @Param("id")  int id);*/

	                    
}



   