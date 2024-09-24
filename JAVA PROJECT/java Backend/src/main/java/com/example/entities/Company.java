package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Company {
	private int company_Id;
    private String company_Name;
    private String logo;
    private String location;
    private int total_Placement;
    
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	public int getCompany_Id() {
		return company_Id;
	}
	public void setCompany_Id(int company_Id) {
		this.company_Id = company_Id;
	}
	@Column
	public String getCompany_Name() {
		return company_Name;
	}
	public void setCompany_Name(String company_Name) {
		this.company_Name = company_Name;
	}
	@Column
	public String getLogo() {
		return logo;
	}
	public void setLogo(String logo) {
		this.logo = logo;
	}
	@Column
	public String getLocation() {
		return location;
	}
	public void setLocation(String location1) {
		this.location = location1;
	}
	@Column
	public int getTotal_Placement() {
		return total_Placement;
	}
	public void setTotal_Placement(int total_Placement) {
		this.total_Placement = total_Placement;
	}
	
}
