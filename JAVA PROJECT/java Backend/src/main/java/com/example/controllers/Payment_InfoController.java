//package com.example.Controller;
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.example.entities.Payment_Info;
//import com.example.service.PaymentService;
//@RestController
//@CrossOrigin("*")
//@RequestMapping("api/payment_Info")
//public class Payment_InfoController 
//{
//	
//	
//	@Autowired
//	private PaymentService Service;
//
//    @PostMapping(value="/create")
//    public ResponseEntity<Payment_Info> createPayment_Info(@RequestBody Payment_Info Payment_Info) 
//    {
//        Payment_Info createdPayment_Info = Service.addPayment_Info(Payment_Info);
//        return ResponseEntity.status(HttpStatus.CREATED).body(createdPayment_Info);
//    }
//    @GetMapping(value = "/ListAll")
//	 public List<Payment_Info> ListAll()
//	 {
//		  return Service.getPayment_Info(); 
//		
//	 }
//	
//	 @GetMapping(value = "/{id}")
//	 public Optional<Payment_Info> getCours(@PathVariable int id)
//	 {
//		Optional<Payment_Info> p=Service.getPayment_Info(id);
//		return p;
//	 }
//	
//	 @DeleteMapping(value = "/{id}")
//	 public void remove(@PathVariable int id)
//	 {
//		Service.delete(id);
//	 }
//
//
//}

package com.example.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.entities.Payment_Info;
import com.example.services.Payment_InfoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/payment_info")
public class Payment_InfoController {

    @Autowired
    private Payment_InfoService paymentInfoService;

    @PostMapping("/create")
    public ResponseEntity<Payment_Info> createPaymentInfo(@RequestBody Payment_Info paymentInfo) {
        Payment_Info createdPaymentInfo = paymentInfoService.addPaymentInfo(paymentInfo);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPaymentInfo);
    }

    @GetMapping("/listAll")
    public List<Payment_Info> listAllPaymentInfo() {
        return paymentInfoService.getPaymentInfo();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment_Info> getPaymentInfoById(@PathVariable int id) {
        Optional<Payment_Info> paymentInfo = paymentInfoService.getPaymentInfo(id);
        return paymentInfo.map(info -> ResponseEntity.ok().body(info))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

   
}

