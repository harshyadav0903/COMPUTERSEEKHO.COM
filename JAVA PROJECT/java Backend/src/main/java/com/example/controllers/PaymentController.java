package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entities.Payment;
import com.example.services.PaymentService;

@RestController
@CrossOrigin("*")
@RequestMapping("api/Payment")
public class PaymentController {
	
	@Autowired
    private PaymentService service;

    @PostMapping(value="/create")
    public ResponseEntity<Payment> createPayment(@RequestBody Payment payment) {
        Payment createdPayment = service.addPayment(payment);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPayment);
    }
     
  /* @PutMapping("update/{id}")
    public ResponseEntity<String> updatePayment( @RequestBody Payment updatedPayment,@PathVariable int id) {
        try {
            service.updatePayment( updatedPayment,id);
            return ResponseEntity.ok("addedd successfully");
        } catch (RuntimeException e) {
            // Handle the case where the payment with the given id is not found
            return ResponseEntity.notFound().build();
        }
    }*/

    @PutMapping("/payment/{id}")
	public void updatePayment(@PathVariable int id,@RequestBody Payment payment)
	{
		payment.setPayment_Id(id);
		// payment.updatePayment(payment);
		service.updatePayment(payment, id);
		
		
	}
    
    @GetMapping("/ListAll")
    public List<Payment> listAll() {
        return service.getPayment();
    }


//    @DeleteMapping(value = "/{id}")
//    public ResponseEntity<Void> remove(@PathVariable int id) {
//        service.delete(id);
//        return ResponseEntity.noContent().build();
//    }
    @GetMapping(value="/{pid}")
    public Optional<Payment> getbyid(@PathVariable int pid) {
        return service.getById(pid);
    }

}