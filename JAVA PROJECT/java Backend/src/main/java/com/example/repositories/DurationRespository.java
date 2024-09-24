package com.example.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.entities.CourseDuration;


@Repository
public interface DurationRespository extends JpaRepository <CourseDuration,Integer>
{

}
