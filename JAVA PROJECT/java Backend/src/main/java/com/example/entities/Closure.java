package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Closure 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Closure_Id;
	private String Clousure_Reason;
	
	@Column
	public int getClosure_Id() {
		return Closure_Id;
	}
	public void setClosure_Id(int closure_Id) {
		Closure_Id = closure_Id;
	}
	
	@Column
	public String getClousre_Reason() {
		return Clousure_Reason;
		
	}
	public void setClousre_Reason(String clousure_Reason) {
		Clousure_Reason = clousure_Reason;
	}
	
	
	


}
