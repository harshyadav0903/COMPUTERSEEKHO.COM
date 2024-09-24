package com.example.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.entities.Notification;

import com.example.repositories.NotificationJpa;

@Service
public class NotifacationService {
	@Autowired
	NotificationJpa repo;
	public void addNotification(Notification n) {
		repo.save(n);
		System.out.println("Notification Added Successfully");
	}
	public List<Notification> getallNotification(){
		return repo.findAll();
	}
	public void delete(int id) {
		repo.deleteById(id);
	}
	public Optional<Notification> GetOnenotification(int id){
		return repo.findById(id);
	}
	public void update(Notification notify) {
		repo.save(notify);
	}
}
