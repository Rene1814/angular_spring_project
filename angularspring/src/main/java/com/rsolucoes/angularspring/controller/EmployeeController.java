package com.rsolucoes.angularspring.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rsolucoes.angularspring.dto.EmployeeDto;
import com.rsolucoes.angularspring.service.EmployeeService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	private EmployeeService employeeService;
	
	public EmployeeController(EmployeeService employeeService) {
		this.employeeService= employeeService;
	}
	
	// Get All Employees REST API
	@GetMapping("/employees")
	public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
		List<EmployeeDto> employees = employeeService.getAllEmployees();
		return ResponseEntity.ok(employees);
	}
	
}
