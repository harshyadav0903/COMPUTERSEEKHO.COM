package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.services.StudentService;
import com.example.entities.Student;


@RestController
@RequestMapping("/api/students")
@CrossOrigin("*")
public class StudentController {
	@Autowired
    public StudentService studentService;

    @GetMapping("/allStudents")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> StudentLists = studentService.getAllStudents();
        return ResponseEntity.ok(StudentLists);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Student>> getStudentById(@PathVariable int id) {
        Optional<Student> student = studentService.GetbyId(id);
        return ResponseEntity.ok(student);
    }
    @PostMapping("/add_Student")
    public ResponseEntity<String> addStudent(@RequestBody Student student) {
        try {
            studentService.addStudent(student);
            return ResponseEntity.ok("Student added successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding staff member");
        }
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student updatedStudent) {
//        Student updated = studentService.updateStudent(id, updatedStudent);
//        return ResponseEntity.ok(updated);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/DeleteAll")
    public ResponseEntity<String> deleteAllStudents() {
    	studentService.deleteAllStudents();
    	return ResponseEntity.ok("Records all deleted Successfully");
    }
    @PutMapping("/{id}")
	 public void updatestudent(@RequestBody Student stud,@PathVariable int id)
	 {
		studentService.updateStudent(stud,id);
	 }
    
    @GetMapping("/findstudent/{name}")
    public ResponseEntity<Optional<Student>> getStudentById(@PathVariable String name) {
        Optional<Student> student = studentService.findbyname(name);
        if (student.isPresent()) {
        	System.out.println("found in the table");
            return ResponseEntity.ok(student);
        } else {
        	System.out.println("not found in the table");
            return ResponseEntity.notFound().build();
        }    
        
    }
    @GetMapping("/feespending")
    public List<Student> feespending() {
		return studentService.FeesPendingcheck();
    }
}







