package com.example.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BatchInfo {
	 private int batchinfo_Id;
	    private int BatchId;
	    private int Staff_Id;
	    private String subject;
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		public int getBatchinfo_Id() {
			return batchinfo_Id;
		}
		public void setBatchinfo_Id(int batchinfo_Id) {
			this.batchinfo_Id = batchinfo_Id;
		}
		public int getBatchId() {
			return BatchId;
		}
		public void setBatchId(int batchId) {
			BatchId = batchId;
		}
		public int getStaff_Id() {
			return Staff_Id;
		}
		public void setStaff_Id(int staff_Id) {
			Staff_Id = staff_Id;
		}
		public String getSubject() {
			return subject;
		}
		public void setSubject(String subject) {
			this.subject = subject;
		}
		
}
