package com.cts.training.userservice;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.training.userservice.Register;

public interface RegisterRepo extends JpaRepository<Register, Integer>{
	
	public Register findByEmail(String email);
	public Register getUserByUsernameAndPassword(String username,String password);

}
