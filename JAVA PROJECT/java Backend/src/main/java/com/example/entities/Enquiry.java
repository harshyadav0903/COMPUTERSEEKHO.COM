package com.example.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Enquiry {
	private int Enquiry_Id;
    private String EnquirerName;
    private String Qualification;
    private String Contact_No;
    private String Email;
    private Date Enquiry_Date;
    private int Enquiry_Source_id;
    private String Student_Name;
    private int Location_id;
    private String Enquirer_Query;
    private int closure_Id;
    private Date Next_followup_Date;
    private int Course_Id;
    private int Staff_id;
    private Date Date_Of_Birth;
    private String other_Closure_reason;
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
	public int getEnquiry_Id() {
		return Enquiry_Id;
	}
	
	public void setEnquiry_Id(int enquiry_Id) {
		Enquiry_Id = enquiry_Id;
	}
	
	@Column
	public String getEnquirerName() {
		return EnquirerName;
	}
	
	public void setEnquirerName(String enquirerName) {
		EnquirerName = enquirerName;
	}
	
	@Column
	public String getQualification() {
		return Qualification;
	}
	
	public void setQualification(String qualification) {
		Qualification = qualification;
	}
	
	@Column
	public String getContact_No() {
		return Contact_No;
	}
	
	public void setContact_No(String contact_No) {
		Contact_No = contact_No;
	}
	
	@Column
	public String getEmail() {
		return Email;
	}
	
	public void setEmail(String email) {
		Email = email;
	}
	
	@Column
	public Date getEnquiry_Date() {
		return Enquiry_Date;
	}
	
	public void setEnquiry_Date(Date enquiry_Date) {
		Enquiry_Date = enquiry_Date;
	}
	
	@Column
	public int getEnquiry_Source_id() {
		return Enquiry_Source_id;
	}
	
	public void setEnquiry_Source_id(int enquiry_Source_id) {
		Enquiry_Source_id = enquiry_Source_id;
	}
	
	@Column
	public String getStudent_Name() {
		return Student_Name;
	}
	
	public void setStudent_Name(String student_Name) {
		Student_Name = student_Name;
	}
	
	@Column
	public int getLocation_id() {
		return Location_id;
	}
	
	public void setLocation_id(int location_id) {
		Location_id = location_id;
	}
	
	@Column
	public String getEnquirer_Query() {
		return Enquirer_Query;
	}
	
	public void setEnquirer_Query(String enquirer_Query) {
		Enquirer_Query = enquirer_Query;
	}
	
	@Column
	public int getClosure_Id() {
		return closure_Id;
	}
	
	public void setClosure_Id(int closure_Id) {
		this.closure_Id = closure_Id;
	}
	
	@Column
	public Date getNext_followup_Date() {
		return Next_followup_Date;
	}
	
	public void setNext_followup_Date(Date next_followup_Date) {
		Next_followup_Date = next_followup_Date;
	}
	
	@Column
	public int getCourse_Id() {
		return Course_Id;
	}
	/**
	 * @param course_Id the course_Id to set
	 */
	public void setCourse_Id(int course_Id) {
		Course_Id = course_Id;
	}
	
	@Column
	public int getStaff_id() {
		return Staff_id;
	}
		public void setStaff_id(int staff_id) {
		Staff_id = staff_id;
	}
		@Column
	public Date getDate_Of_Birth() {
		return Date_Of_Birth;
	}
	
	public void setDate_Of_Birth(Date date_Of_Birth) {
		Date_Of_Birth = date_Of_Birth;
	}
	@Column
	public String getOther_Closure_reason() {
		return other_Closure_reason;
	}
	
	public void setOther_Closure_reason(String other_Closure_reason) {
		this.other_Closure_reason = other_Closure_reason;
	}
    
}