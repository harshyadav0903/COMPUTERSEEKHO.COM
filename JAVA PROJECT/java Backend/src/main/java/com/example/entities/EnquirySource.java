package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class EnquirySource {
    
    private int enquirySourceId;

    private String enquirySource;

    // getters and setters
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    public int getEnquirySourceId() {
        return enquirySourceId;
    }

    public void setEnquirySourceId(int enquirySourceId) {
        this.enquirySourceId = enquirySourceId;
    }
    @Column
    public String getEnquirySource() {
        return enquirySource;
    }

    public void setEnquirySource(String enquirySource) {
        this.enquirySource = enquirySource;
    }
}
