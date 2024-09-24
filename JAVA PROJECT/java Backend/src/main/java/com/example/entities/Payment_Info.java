package com.example.entities;

import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "payment_info")
public class Payment_Info {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Payment_Id;
	@Column
	private String Payment_method_Description;

	public Integer getPayment_Id() {
		return Payment_Id;
	}

	public void setPayment_Id(int payment_Id) {
		Payment_Id = payment_Id;
	}

	public String getPayment_method_Description() {
		return Payment_method_Description;
	}

	public void setPayment_method_Description(String payment_method_Description) {
		Payment_method_Description = payment_method_Description;
	}

	public Payment_Info(int payment_Id, String payment_method_Description) {
		super();
		Payment_Id = payment_Id;
		Payment_method_Description = payment_method_Description;
	}
	public Payment_Info() {
		
	}

}
