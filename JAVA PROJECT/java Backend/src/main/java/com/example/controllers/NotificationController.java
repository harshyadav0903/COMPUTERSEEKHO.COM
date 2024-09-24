package com.example.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.services.NotifacationService;
import com.example.entities.Notification;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/notification")
public class NotificationController {
	@Autowired
	public NotifacationService notify;
	
	@PostMapping("/add")
	public ResponseEntity<String> addNotificaiton(@RequestBody Notification note){
		try {
			notify.addNotification(note);
			return ResponseEntity.ok("Notification Added Successfully");
		}
		catch(Exception e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding Notification");
		}
	}
	@GetMapping("ShowAll")
	public ResponseEntity<java.util.List<Notification>> getallNotification(){
		java.util.List<Notification> NotificationList=notify.getallNotification();
		return ResponseEntity.ok(NotificationList);
	}
	@GetMapping("/{id}")
    public ResponseEntity<Notification> getNotificationbyId(@PathVariable int id) {
        Optional<Notification> getone = notify.GetOnenotification(id);
        return getone.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteNotificaitonbyId(@PathVariable int id) {
       notify.delete(id);
        return ResponseEntity.ok("Notification deleted successfully");
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> UpdateNotificationbyid(@PathVariable int id,@RequestBody Notification note) {
        notify.update(note);
        return ResponseEntity.ok("Notification Updated successfully");
    }
}
