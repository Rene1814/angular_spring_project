package com.rsolucoes.angularspring.service;

import java.util.List;

import com.rsolucoes.angularspring.dto.EmployeeDto;

public interface EmployeeService {
	
	List<EmployeeDto> getAllEmployees();
	
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long id);
	
	EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);
	
	void deleteEmployee(Long id);

}
