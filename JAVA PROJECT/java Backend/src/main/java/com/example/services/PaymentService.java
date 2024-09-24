package com.example.services;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.entities.Payment;
import com.example.repositories.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	PaymentRepository repository;
	
	
	 public List<Payment> getPayment() {
		return repository.findAll();
		// TODO Auto-generated method stub
		
	}

	 
	public void delete(int id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}
	public Optional<Payment> getById(int pid)
	{
		return repository.findById(pid);
	}

	 
	public Payment addPayment(Payment c) {
		// TODO Auto-generated method stub
		return repository.save(c);
	}

	public String updatePayment(Payment payment ,int id) {
		repository.save(payment);
		return "Successsfully updated";
	}
	/*public void updatePayment(@RequestBody Payment updatedPayment,@PathVariable int id) {
		// TODO Auto-generated method stub
		repository.updatePayment(updatedPayment.getStudent_Id(),updatedPayment.getTransaction_Id(),updatedPayment.getDate(),updatedPayment.getAmount(),updatedPayment.getBatch_Id(),updatedPayment.getPaymentTypeId() ,id);
	}*/
	
	

  /*  public Payment updatePayment(Payment updatedPayment) {
        // Check if the payment exists
        Optional<Payment> existingPaymentOptional = repository.findById(updatedPayment.getPayment_Id());
        if (existingPaymentOptional.isPresent()) {
            Payment existingPayment = existingPaymentOptional.get();
            // Update the existing payment with the new values
            existingPayment.setStudent_Id(updatedPayment.getStudent_Id());
            existingPayment.setTransaction_Id(updatedPayment.getTransaction_Id());
            existingPayment.setDate(updatedPayment.getDate());
            existingPayment.setAmount(updatedPayment.getAmount());
            existingPayment.setBatch_Id(updatedPayment.getBatch_Id());
            existingPayment.setPaymentTypeId(updatedPayment.getPaymentTypeId());
            // Save the updated payment
            return repository.save(existingPayment);
        } else {
            // Handle the case where the payment with the given ID doesn't exist
            throw new IllegalArgumentException("Payment with ID " + updatedPayment.getPayment_Id() + " not found.");
        }
    }*/

}