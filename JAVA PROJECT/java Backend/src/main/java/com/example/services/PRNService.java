package com.example.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.entities.PRN_Generator;
import com.example.entities.Student;
import com.example.repositories.PRNRepository;
import com.example.repositories.StudentRepository;


@Service
public class PRNService {
    @Autowired
    PRNRepository repository;
    
    @Autowired
    StudentRepository studentRepository;
    
    public List<PRN_Generator> getallPRN(String prnId)
    {
    	return repository.findByPrnId(prnId);
    }

   
 
    public List<PRN_Generator> getAllPRNGenarator() {
        return repository.findAll();
    }

    public Optional<PRN_Generator> GetGeneratorbyId(int id) {
		// TODO Auto-generated method stub
		return repository.findById(id);
	}

    
    public String generatePRNDAC(int id1, int id2) {
        Optional<Student> optionalStudent = studentRepository.findById(id2);

        if (optionalStudent.isPresent()) {
            Student student = optionalStudent.get();

            String prnValue;
            if (id1 == 1) {
                prnValue = "DAC" + id2;
            } else if (id1 == 2) {
                prnValue = "DBDA" + id2;
            } else if (id1 == 3) {
                prnValue = "MSCIT" + id2;
            } else if (id1 == 4) {
                prnValue = "PRECAT" + id2;
            } else {
                return "No Such course Available to generate the PRN";
            }

            PRN_Generator prnEntity = new PRN_Generator();
            prnEntity.setPRN_Id(prnValue);
            prnEntity.setCourse_Id(id1);
            prnEntity.setStudent(student);  // Set the Student entity
            repository.save(prnEntity);

            return prnValue;
        } else {
            return "Student with id " + id2 + " not found";
        }
    }

    // Other methods...
}
    
    
    
    
    /*public String generatePRNDAC(int id1, int id2) 
    {
        if (id1==1) 
        {
            String prnValue = "DAC" + id2;
            
            PRN_Generator prnEntity = new PRN_Generator(); 
            prnEntity.setPRN_Id(prnValue); 
            prnEntity.setCourse_Id(id1);
            
            repository.save(prnEntity);
            return prnValue;
        } 
        else if(id1==2)
        {  
        	String prnValue = "DBDA" + id2;   
            PRN_Generator prnEntity = new PRN_Generator(); 
            prnEntity.setPRN_Id(prnValue); 
            prnEntity.setCourse_Id(id1);
           // prnEntity.setStudent_Id(id2);
            repository.save(prnEntity);
           return prnValue;
        }
        
        else if(id1==3)
        {
        	String prnValue = "MSCIT" + id2;
            
            PRN_Generator prnEntity = new PRN_Generator(); 
            prnEntity.setPRN_Id(prnValue); 
            prnEntity.setCourse_Id(id1);
            //prnEntity.setStudent_Id(id2);
            repository.save(prnEntity);

            return prnValue;
        }
        else if(id1==4)
        {
        	String prnValue = "PRECAT" + id2;
            
            PRN_Generator prnEntity = new PRN_Generator(); 
            prnEntity.setPRN_Id(prnValue); 
            prnEntity.setCourse_Id(id1);
            //prnEntity.setStudent_Id(id2);
            repository.save(prnEntity);

            return prnValue;
        }
		return "No Such course Available to generate the PRN";
    }*/

  


