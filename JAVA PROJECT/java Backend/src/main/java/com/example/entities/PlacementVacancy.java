package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="PlacementVacancy")
public class PlacementVacancy 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Placementvacancyid;
	private int Company_Id;
	private int Vacancy;
	private String Location;
	
	@Column
	public int getPlacementVacancy_Id() {
		return Placementvacancyid;
	}
	public void setPlacementVacancy_Id(int placementVacancy_Id) {
		Placementvacancyid = placementVacancy_Id;
	}
	
	@Column
	public int getCompany_Id() {
		return Company_Id;
	}
	public void setCompany_Id(int company_Id) {
		Company_Id = company_Id;
	}
	
	@Column
	public int getVacancy() {
		return Vacancy;
	}
	public void setVacancy(int vacancy) {
		Vacancy = vacancy;
	}
	
	@Column
	public String getLocation() {
		return Location;
	}
	public void setLocation(String location) {
		Location = location;
	}
	
	


}
