package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Qualification")
public class Qualification {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Qualification_id;
	private String Qualification;
	
	@Column
	public int getQualification_id() {
		return Qualification_id;
	}
	public void setQualification_id(int qualification_id) {
		Qualification_id = qualification_id;
	}
	
	@Column
	public String getQualification() {
		return Qualification;
	}
	public void setQualification(String qualification) {
		Qualification = qualification;
	}
	
	


}
