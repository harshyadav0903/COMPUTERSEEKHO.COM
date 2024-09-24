package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entities.EnquirySource;

public interface EnquirySourceRepository extends JpaRepository<EnquirySource,Integer> {
    // You can add custom query methods if needed
}
