package com.example.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Notification {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	int notification_id;
	Date arriving_date;
	Date expiry_date;
	String notification_message;
	@Column
	public int getNotification_id() {
		return notification_id;
	}
	public void setNotification_id(int notification_id) {
		this.notification_id = notification_id;
	}
	@Column
	public Date getArriving_date() {
		return arriving_date;
	}
	public void setArriving_date(Date arriving_date) {
		this.arriving_date = arriving_date;
	}
	@Column
	public Date getExpiry_date() {
		return expiry_date;
	}
	
	public void setExpiry_date(Date expiry_date) {
		this.expiry_date = expiry_date;
	}
	@Column
	public String getNotification_message() {
		return notification_message;
	}
	public void setNotification_message(String notification_message) {
		this.notification_message = notification_message;
	}
	@Override
	public String toString() {
		return "Notification [notification_id=" + notification_id + ", arriving_date=" + arriving_date
				+ ", expiry_date=" + expiry_date + ", notification_message=" + notification_message + "]";
	}
	
}
