package com.tbackend_java.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tbackend_java.entity.Users;
import com.tbackend_java.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
public class UserService {
	
	@Autowired
	private final UserRepository userRepository = null;

    public int createUserService(Users user){
    	int result = userRepository.createUserBy(user);
    	System.out.println("result : "+result);
    
    	return 0;

    }
}
