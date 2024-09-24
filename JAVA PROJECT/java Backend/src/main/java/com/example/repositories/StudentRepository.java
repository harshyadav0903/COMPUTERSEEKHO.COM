package com.example.repositories;

import java.sql.Date;
import java.util.Optional;

import java.util.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.entities.Student;

@Repository//it is making repository,
@Transactional//Autocommit true karta hai kya
public interface StudentRepository extends JpaRepository<Student,Integer> 
{
	@Modifying
	@Query("UPDATE Student s SET " +
	        "s.student_name = :name, " +
	        "s.enquiry_id = :enquiryId, " +
	        "s.batch_id = :batchId, " +
	        "s.registration_date = :regDate, " +
	        "s.payment_id = :paymentId, " +
	        "s.photo = :photo, " +
	        "s.contact_no = :contactNo, " +
	        "s.email = :email, " +
	        "s.gender = :gender, " +
	        "s.location_id = :locationId, " +
	        "s.date_of_birth = :dob, " +
	        "s.qualification_id = :qualId, " +
	        "s.course_id = :courseId, " +
	        "s.total_fees = :totalFees, " +
	        "s.fees_paid = :feesPaid " +
	        "WHERE s.student_id = :id")
	void updateStudent(@Param("name") String name, @Param("enquiryId") int enquiryId,
	                   @Param("batchId") int batchId, @Param("regDate") Date regDate,
	                   @Param("paymentId") int paymentId, @Param("photo") String photo,
	                   @Param("contactNo") String contactNo, @Param("email") String email,
	                   @Param("gender") String gender, @Param("locationId") int locationId,
	                   @Param("dob") Date dob, @Param("qualId") String string,
	                   @Param("courseId") int courseId, @Param("totalFees") int totalFees,
	                   @Param("feesPaid") int feesPaid, @Param("id") int id);
	@Query(nativeQuery = true, value = "SELECT * FROM student s WHERE s.student_name = :name")
    Optional<Student> findByStudentName(@Param("name") String name);
	@Query(nativeQuery=true,value="SELECT * FROM Student s WHERE s.fees_paid <> 60000")
    List<Student> feespending();
}
