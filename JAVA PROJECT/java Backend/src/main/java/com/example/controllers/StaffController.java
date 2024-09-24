package com.example.controllers;

import java.util.List;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.services.StaffService;
import com.example.entities.Staff;


@RestController
@RequestMapping("/api/staff")
@CrossOrigin("*")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @PostMapping("/create")
    public ResponseEntity<String> addStaff(@RequestBody Staff staff) {
        try {
            staffService.addStaff(staff);
            return ResponseEntity.ok("Staff member added successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding staff member");
        }
    }
    @GetMapping("/ListAll")
    public ResponseEntity<List<Staff>> getAllStaff() {
        List<Staff> staffList = staffService.getStaffs();
        return ResponseEntity.ok(staffList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable int id) {
        Optional<Staff> staff = staffService.getStaff(id);
        return staff.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteStaffById(@PathVariable int id) {
        staffService.delete(id);
        return ResponseEntity.ok("Staff member deleted successfully");
    }
   
//    @PostMapping(value = "/login")
//	 public int logInpro(@RequestBody Staff s ) 
//    {
//		 return staffService.logIn(s);
//	 }
    
    
    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<Staff> loginUser(@RequestBody Staff staff) 
    {
        Optional<Staff> loggedInStaff = staffService.loginUser(staff.getEmail(),staff.getPassword());

        if (loggedInStaff.isPresent()) 
        {
            return ResponseEntity.ok(loggedInStaff.get());
        } 
        else 
        {
            return ResponseEntity.status(401).build(); // Unauthorized
        }
    }
    
    
    
    
    
    
    
    
    
    
    @PutMapping("/{id}")
    public ResponseEntity<String> updateStaffbyId(@PathVariable int id,@RequestBody Staff staff)
    {
       staffService.update(staff);
       return ResponseEntity.ok("Staff updated Successfully");
    }
    
}
