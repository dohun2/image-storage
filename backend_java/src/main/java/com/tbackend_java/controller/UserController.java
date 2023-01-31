package com.tbackend_java.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tbackend_java.entity.Users;
import com.tbackend_java.service.UserService;

import lombok.RequiredArgsConstructor;

@CrossOrigin("*")
@RestController
@RequestMapping("api")
public class UserController {
	
	@Autowired
	private final UserService userService= null;
	
	@RequestMapping("signup")
	public ResponseEntity<Integer> createUsers(@RequestBody Users user) {
		System.out.println(user);
		int result = userService.createUserService(user);
		System.out.println(result);
		
		return ResponseEntity.ok().body(result);
	}
	
	
	@GetMapping("select")
	public ResponseEntity <List> createUsers() {
	
		List<Users> result = userService.selectListUsers();
		
		return ResponseEntity.ok().body(result);
	}
	
	
}
