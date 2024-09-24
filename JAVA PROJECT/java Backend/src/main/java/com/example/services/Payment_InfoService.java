//package com.example.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import java.util.List;
//import java.util.Optional;
//import com.example.repositories.Payment_InfoRepository;
//import com.example.entities.Payment_Info;
//import com.example.service.Payment_InfoService;
//@Service
//public class Payment_InfoService {
//	@Autowired
//    Payment_InfoRepository  repository;
//	
//	public List<Payment_Info> getPayment_Info() {
//		// TODO Auto-generated method stub
//		return (List<Payment_Info>) repository.findAll();
//	}
//
//	
//	public void delete(int id) {
//		// TODO Auto-generated method stub
//		repository.deleteById(id);
//	}
//
//	
//	public Optional<Payment_Info> getPayment_Info(int id) {
//		// TODO Auto-generated method stub
//		return repository.findById(id);
//	}
//
//	
//	public Payment_Info addPayment_Info(Payment_Info c) {
//		// TODO Auto-generated method stub
//		return repository.save(c);
//	}
//
//}

package com.example.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.example.repositories.Payment_InfoRepository;
import com.example.entities.Payment_Info;

@Service
public class Payment_InfoService {

    @Autowired
    private Payment_InfoRepository paymentInfoRepository;

    public List<Payment_Info> getPaymentInfo() {
        return (List<Payment_Info>) paymentInfoRepository.findAll();
    }

    public void deletePaymentInfo(int id) {
        paymentInfoRepository.deleteById(id);
    }

    public Optional<Payment_Info> getPaymentInfo(int id) {
        return paymentInfoRepository.findById(id);
    }

    public Payment_Info addPaymentInfo(Payment_Info paymentInfo) {
        return paymentInfoRepository.save(paymentInfo);
    }
}

