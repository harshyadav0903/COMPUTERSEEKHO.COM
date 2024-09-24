package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="PlacementData")
public class PlacementData 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int placementid;
	private int placementvacancyid;
	private String prnid;
	private int companyid;
	private String designation;
	private int batchid;
	private String status;
	private String photourl;
	public int getPlacementid() {
		return placementid;
	}
	public void setPlacementid(int placementid) {
		this.placementid = placementid;
	}
	public int getPlacementvacancyid() {
		return placementvacancyid;
	}
	public void setPlacementvacancyid(int placementvacancyid) {
		this.placementvacancyid = placementvacancyid;
	}
	public String getPrnid() {
		return prnid;
	}
	public void setPrnid(String prnid) {
		this.prnid = prnid;
	}
	public int getCompanyid() {
		return companyid;
	}
	public void setCompanyid(int companyid) {
		this.companyid = companyid;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	public int getBatchid() {
		return batchid;
	}
	public void setBatchid(int batchid) {
		this.batchid = batchid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getPhotourl() {
		return photourl;
	}
	public void setPhotourl(String photourl) {
		this.photourl = photourl;
	}
	
	
	
	
	
	


}
