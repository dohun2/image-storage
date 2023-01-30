package com.tbackend_java.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.service.annotation.GetExchange;

@Controller
public class HomeController {
	
	@GetMapping("/home")
	public String home(){
		return "home";
	}
	
	@RequestMapping("/home2")
	public String home2(){
		return "index2";
	}

}
