package com.example.entities;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
@Entity
public class Batch {
	   private int batch_id;
	    private String batch_name;
	    private Date batch_year;
	    private String batch_logo;
	    private Date start_date;
	    private Date end_date;
	    private int course_id;
	    private boolean is_active;
	    private Date FinalPresentationDate;
	    private String Cover_Photo;
	    
	    
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column
		public int getBatch_id() {
			return batch_id;
		}
		public void setBatch_id(int batch_id) {
			this.batch_id = batch_id;
		}
		public String getBatch_name() {
			return batch_name;
		}
		public void setBatch_name(String batch_name) {
			this.batch_name = batch_name;
		}
		public Date getBatch_year() {
			return batch_year;
		}
		public void setBatch_year(Date batch_year) {
			this.batch_year = batch_year;
		}
		public String getBatch_logo() {
			return batch_logo;
		}
		public void setBatch_logo(String batch_logo) {
			this.batch_logo = batch_logo;
		}
		public Date getStart_date() {
			return start_date;
		}
		public void setStart_date(Date start_date) {
			this.start_date = start_date;
		}
		public Date getEnd_date() {
			return end_date;
		}
		public void setEnd_date(Date end_date) {
			this.end_date = end_date;
		}
		public int getCourse_id() {
			return course_id;
		}
		public void setCourse_id(int course_id) {
			this.course_id = course_id;
		}
		public boolean isIs_active() {
			return is_active;
		}
		public void setIs_active(boolean is_active) {
			this.is_active = is_active;
		}
		public Date getFinalPresentationDate() {
			return FinalPresentationDate;
		}
		public void setFinalPresentationDate(Date finalPresentationDate) {
			FinalPresentationDate = finalPresentationDate;
		}
		public String getCover_Photo() {
			return Cover_Photo;
		}
		public void setCover_Photo(String cover_Photo) {
			Cover_Photo = cover_Photo;
		}
	    
		
}
