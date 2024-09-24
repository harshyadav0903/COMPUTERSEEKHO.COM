package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {

    private int courseId;
    private String courseName;
    private int capacity;
    private int duration_id;
    private int Qualification_id;
    private int age_Group_id;
    private String description;
    private String syllabus;
    private boolean is_active;
    private String video;
    private String photo;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
	public int getCourseId() {
		return courseId;
	}
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public int getduration_id() {
		return duration_id;
	}
	public void setduration_id(int duration_id) {
		this.duration_id = duration_id;
	}
	public int getQualification_id() {
		return Qualification_id;
	}
	public void setQualification_id(int Qualification_id) {
		this.Qualification_id = Qualification_id;
	}
	public int getage_Group_id() {
		return age_Group_id;
	}
	public void setage_Group_id(int age_Group_id) {
		this.age_Group_id = age_Group_id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getSyllabus() {
		return syllabus;
	}
	public void setSyllabus(String syllabus) {
		this.syllabus = syllabus;
	}
	public boolean isIs_active() {
		return is_active;
	}
	public void setIs_active(boolean is_active) {
		this.is_active = is_active;
	}
	public String getVideo() {
		return video;
	}
	public void setVideo(String video) {
		this.video = video;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
	}

}
   
