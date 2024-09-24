package com.example.entities;

import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Follow_Up {
	int followUp_id;
	int enquiry_Id;
	Date followUp_date;
	int attempts;
	int staff_id;
    private int closure_Id;
	String followUp_message;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	public int getFollowUp_id() {
		return followUp_id;
	}
	public void setFollowUp_id(int followUp_id) {
		this.followUp_id = followUp_id;
	}
	public int getEnquiry_Id() {
		return enquiry_Id;
	}
	public void setEnquiry_Id(int enquiry_Id) {
		this.enquiry_Id = enquiry_Id;
	}
	public Date getFollowUp_date() {
		return followUp_date;
	}
	public void setFollowUp_date(Date followUp_date) {
		this.followUp_date = followUp_date;
	}
	public int getAttempts() {
		return attempts;
	}
	public void setAttempts(int attempts) {
		this.attempts = attempts;
	}
	public int getStaff_id() {
		return staff_id;
	}
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}
	public int getClosure_Id() {
		return closure_Id;
	}
	public void setClosure_Id(int closure_Id) {
		this.closure_Id = closure_Id;
	}
	public String getFollowUp_message() {
		return followUp_message;
	}
	public void setFollowUp_message(String followUp_message) {
		this.followUp_message = followUp_message;
	}
	
	
	
	
}
