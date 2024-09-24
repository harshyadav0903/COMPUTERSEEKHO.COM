package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.Notification;
@Repository
public interface NotificationJpa extends JpaRepository<Notification,Integer>{
	
}
