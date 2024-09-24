package com.example.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Staff")
public class Staff {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int Staff_Id;
	public String password;
	public String Username;
	public String Name;
	public int Designation_id;
	public int Qualification_id;
	public String Experience;
	public String Contact_No;
	public String email;
	public String Photo;
	public int Location_id;
	public Date Joining_date;
	public int role_id;
	public int getStaff_Id() {
		return Staff_Id;
	}
	public void setStaff_Id(int staff_Id) {
		Staff_Id = staff_Id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getName() {
		return Name;
	}
	public void setName(String name) {
		Name = name;
	}
	public int getDesignation_id() {
		return Designation_id;
	}
	public void setDesignation_id(int designation_id) {
		Designation_id = designation_id;
	}
	public int getQualification_id() {
		return Qualification_id;
	}
	public void setQualification_id(int qualification_id) {
		Qualification_id = qualification_id;
	}
	public String getExperience() {
		return Experience;
	}
	public void setExperience(String experience) {
		Experience = experience;
	}
	public String getContact_No() {
		return Contact_No;
	}
	public void setContact_No(String contact_No) {
		Contact_No = contact_No;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhoto() {
		return Photo;
	}
	public void setPhoto(String photo) {
		Photo = photo;
	}
	public int getLocation_id() {
		return Location_id;
	}
	public void setLocation_id(int location_id) {
		Location_id = location_id;
	}
	public Date getJoinint_date() {
		return Joining_date;
	}
	public void setJoinint_date(Date joinint_date) {
		Joining_date = joinint_date;
	}
	public int getRole_id() {
		return role_id;
	}
	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}
	

	

}
