package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;


@Entity
public class PRN_Generator 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pid;
	
	private String PRN_Id;
	
	@OneToOne
    @JoinColumn(name = "student_id", unique = true)
	  private Student student;
	
	private int Course_Id;
	

	@Column
	public int getCourse_Id() {
		return Course_Id;
	}
	public void setCourse_Id(int course_Id) {
		Course_Id = course_Id;
	}
	@Column
	public int getId() {
		return pid;
	}
	public void setId(int id) {
		this.pid = id;
	}
	@Column
	public String getPRN_Id() {
		return PRN_Id;
	}
	public void setPRN_Id(String pRN_Id) {
		PRN_Id = pRN_Id;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	
	
	
	
	
	
	
	
	
	


}
