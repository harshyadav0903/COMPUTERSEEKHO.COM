package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Designation 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Designation_id;
	private String Designation;
	
	@Column
	public int getDesignation_id() {
		return Designation_id;
	}
	public void setDesignation_id(int designation_id) {
		Designation_id = designation_id;
	}
	
	@Column
	public String getDesignation() {
		return Designation;
	}
	public void setDesignation(String designation) {
		Designation = designation;
	}
	
	
	


}
