package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class CourseDuration 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Duration_id;
	private String Duration;
	
	@Column
	public int getDuration_id() {
		return Duration_id;
	}
	public void setDuration_id(int duration_id) {
		Duration_id = duration_id;
	}
	@Column
	public String getDuration() {
		return Duration;
	}
	
	public void setDuration(String duration) {
		Duration = duration;
	}
		

}
