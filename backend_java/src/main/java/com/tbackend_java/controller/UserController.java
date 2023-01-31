package com.tbackend_java.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.tbackend_java.entity.Users;
import com.tbackend_java.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
public class UserController {
	
	@Autowired
	private final UserService userService= null;
	
	@RequestMapping("/userjoin")
	@ResponseBody
	public int createUsers() {
//	public Users createUsers(@RequestBody Users user) {
		Users user1 = new Users();
		user1.setId("dkdk11123123");
		user1.setPassword("321321!@");
		user1.setEmail("wwww@21321321312.com");
		
		userService.createUserService(user1);
		
		return 0;
	}
}
