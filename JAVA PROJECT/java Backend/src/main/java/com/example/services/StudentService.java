package com.example.services;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.entities.Staff;
import com.example.entities.Student;
import com.example.repositories.StudentRepository;

@Service
public class StudentService {
	@Autowired
    public StudentRepository StudentRepo;

   

    public List<Student> getAllStudents() {
        return StudentRepo.findAll();
    }

    public Optional<Student> GetbyId(int id) {
		// TODO Auto-generated method stub
		return StudentRepo.findById(id);
	}

    public  Student addStudent(Student student) {
        return StudentRepo.save(student);
    }

//    public Student updateStudent(Long id, Student updatedStudent) {
//        Student existingStudent = getStudentById(id);
//        
//        existingStudent.setName(updatedStudent.getName());
//        existingStudent.setAge(updatedStudent.getAge());
//
//        return StudentRepo.save(existingStudent);
//    }

    public void deleteStudent(int id) {
        StudentRepo.deleteById(id);
    }
    public Optional<Student> getStudent(int id) {
		return StudentRepo.findById(id);
	}
    public void deleteAllStudents() {
        StudentRepo.deleteAll();
    }
    public Optional<Student> findbyname(String name) {
    	return StudentRepo.findByStudentName(name);
		
    }
    @SuppressWarnings("unchecked")
	public List<Student> FeesPendingcheck() {
    	return StudentRepo.feespending();
		
    }
    
    @Transactional
    public void updateStudent(Student student, int id) {
        StudentRepo.updateStudent(
                student.getStudent_name(),
                student.getEnquiry_id(),
                student.getBatch_id(),
                student.getRegistration_date(),
                student.getPayment_id(),
                student.getPhoto(),
                student.getContact_no(),
                student.getEmail(),
                student.getGender(),
                student.getLocation_id(),
                student.getDate_of_birth(),
                student.getQualification_id(),
                student.getCourse_id(),
                student.getTotal_fees(),
                student.getFees_paid(),
                id 
        );

    }
    @Autowired
    private StudentRepository yourEntityRepository;

//    public Student updateEntity(Student stud, int id) {
//        // Step 1: Fetch the Entity
//        Student existingEntity = yourEntityRepository.findAllById(stud).orElse(null);
//
//        if (existingEntity != null) {
//            // Step 2: Modify the Entity
//            existingEntity.setProperty(id);
//
//            // Step 3: Use the save method to update the entity
//            return yourEntityRepository.save(existingEntity);
//        }
//        // Handle the case where the entity with the given ID is not found
//        return null;
//    }
    
    
}

