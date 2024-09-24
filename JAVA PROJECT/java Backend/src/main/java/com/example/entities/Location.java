package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Location {
	  private int location_id;
	    private String city;
	    private String country;
	    private String landmark;
	    private String pincode;
		
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column
		public int getLocation_id() {
			return location_id;
		}
		
		public void setLocation_id(int location_id) {
			this.location_id = location_id;
		}
		@Column
		public String getCity() {
			return city;
		}
		
		public void setCity(String city) {
			this.city = city;
		}
		
		@Column
		public String getCountry() {
			return country;
		}
		
		public void setCountry(String country) {
			this.country = country;
		}
		
		@Column
		public String getLandmark() {
			return landmark;
		}
		
		public void setLandmark(String landmark) {
			this.landmark = landmark;
		}
		
		@Column
		public String getPincode() {
			return pincode;
		}
		
		public void setPincode(String pincode) {
			this.pincode = pincode;
		}

}
