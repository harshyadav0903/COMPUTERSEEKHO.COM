package com.example.controllers;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.entities.Course;
import com.example.entities.Staff;
import com.example.services.CourseService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/course")
public class CourseController 
{
	@Autowired
	private CourseService Service;

    @PostMapping(value="/create")
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        Course createdCourse = Service.addCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCourse);
    }
    
    
    @GetMapping(value = "/ListAll")
	 public List<Course> ListAll()
	 {
		  return Service.getCourses(); 
		
	 }
	
	 @GetMapping(value = "/{id}")
	 public Optional<Course> getCours(@PathVariable int id)
	 {
		Optional<Course> p=Service.getCourse(id);
		return p;
	 }
	
	 @DeleteMapping(value = "/delete/{id}")
	 public void remove(@PathVariable int id)
	 {
		Service.delete(id);
	 }
	 
	 @PutMapping("/{id}")
	    public ResponseEntity<String> updateStaffbyId(@PathVariable int id,@RequestBody Course Course)
	    {
		 Service.update(Course);
	       return ResponseEntity.ok("Course updated Successfully");
	    }
	    
		 
}
