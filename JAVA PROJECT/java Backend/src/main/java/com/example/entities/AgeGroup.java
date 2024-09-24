package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class AgeGroup 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Age_Group_id;
	private String Age_Group;
	
	@Column
	public int getAge_Group_id() {
		return Age_Group_id;
	}
	
	
	public void setAge_Group_id(int age_Group_id) {
		Age_Group_id = age_Group_id;
	}
	
	@Column
	public String getAge_Group() {
		return Age_Group;
	}
	
	public void setAge_Group(String age_Group) {
		Age_Group = age_Group;
	}
	
	

}
