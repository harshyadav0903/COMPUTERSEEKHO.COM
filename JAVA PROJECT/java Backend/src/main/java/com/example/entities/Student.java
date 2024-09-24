package com.example.entities;

import java.sql.Date;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="student")
public class Student 
{
    
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "student_id")
	public int student_id;
	
	@OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private PRN_Generator prnGenerator;

	@Column(name = "student_name")
	public String student_name;

	@Column(name = "enquiry_id")
	public int enquiry_id;

	@Column(name = "batch_id")
	public int batch_id;

	@Column(name = "registration_date")
	public Date registration_date;

	@Column(name = "payment_id")
	public int payment_id;

	@Column(name = "photo")
	public String photo;

	@Column(name = "contact_no")
	public String contact_no;

	@Column(name = "email")
	public String email;

	@Column(name = "gender")
	public String gender;

	@Column(name = "location_id")
	public int location_id;

	@Column(name = "date_of_birth")
	public Date date_of_birth;

	@Column(name = "qualification_id")
	public String qualification_id;

	@Column(name = "course_id")
	public int course_id;

	@Column(name = "total_fees")
	public int total_fees;

	@Column(name = "fees_paid")
	public int fees_paid;

	public int getStudent_id() {
		return student_id;
	}

	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}

	public String getStudent_name() {
		return student_name;
	}

	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}

	public int getEnquiry_id() {
		return enquiry_id;
	}

	public void setEnquiry_id(int enquiry_id) {
		this.enquiry_id = enquiry_id;
	}

	public int getBatch_id() {
		return batch_id;
	}

	public void setBatch_id(int batch_id) {
		this.batch_id = batch_id;
	}

	public Date getRegistration_date() {
		return registration_date;
	}

	public void setRegistration_date(Date registration_date) {
		this.registration_date = registration_date;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getContact_no() {
		return contact_no;
	}

	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getLocation_id() {
		return location_id;
	}

	public void setLocation_id(int location_id) {
		this.location_id = location_id;
	}

	public Date getDate_of_birth() {
		return date_of_birth;
	}

	public void setDate_of_birth(Date date_of_birth) {
		this.date_of_birth = date_of_birth;
	}

	public String getQualification_id() {
		return qualification_id;
	}

	public void setQualification_id(String qualification_id) {
		this.qualification_id = qualification_id;
	}

	public int getCourse_id() {
		return course_id;
	}

	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}

	public int getTotal_fees() {
		return total_fees;
	}

	public void setTotal_fees(int total_fees) {
		this.total_fees = total_fees;
	}

	public int getFees_paid() {
		return fees_paid;
	}

	public void setFees_paid(int fees_paid) {
		this.fees_paid = fees_paid;
	}

	@Override
	public String toString() {
		return "Student [student_id=" + student_id + ", student_name=" + student_name + ", enquiry_id=" + enquiry_id
				+ ", batch_id=" + batch_id + ", registration_date=" + registration_date + ", payment_id=" + payment_id
				+ ", photo=" + photo + ", contact_no=" + contact_no + ", email=" + email + ", gender=" + gender
				+ ", location_id=" + location_id + ", date_of_birth=" + date_of_birth + ", qualification_id="
				+ qualification_id + ", course_id=" + course_id + ", total_fees=" + total_fees + ", fees_paid="
				+ fees_paid + "]";
	}


	

    
}
