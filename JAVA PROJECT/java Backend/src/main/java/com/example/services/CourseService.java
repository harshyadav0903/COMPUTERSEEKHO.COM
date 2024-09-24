package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.entities.Course;
import com.example.entities.Staff;
import com.example.repositories.CourseRepository;
@Service
public  class CourseService {
	@Autowired
	CourseRepository repository;
	
	
	public Course addCourse(Course c) {
		return repository.save(c);
	}
	
	public void delete(int id) {
		repository.deleteById(id);
	}
	
	public Optional<Course> getCourse(int id) {
		
		return repository.findById(id);
	}
	
	public List<Course> getCourses() {
		// TODO Auto-generated method stub
		return (List<Course>) repository.findAll();
	}

	public void update(Course sf) {
		repository.save(sf);
	}
}
