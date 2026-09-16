package com.rsolucoes.angularspring.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.rsolucoes.angularspring.dto.EmployeeDto;
import com.rsolucoes.angularspring.exception.ResourceNotFoundException;
import com.rsolucoes.angularspring.mapper.EmployeeMapper;
import com.rsolucoes.angularspring.model.Employee;
import com.rsolucoes.angularspring.repository.EmployeeRepository;
import com.rsolucoes.angularspring.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{
	
	private EmployeeRepository employeeRepository;
	
	public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	@Override
	public List<EmployeeDto> getAllEmployees() {
		List<Employee> employees = employeeRepository.findAll();
		return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
				.collect(Collectors.toList());
	}

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {
		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public EmployeeDto getEmployeeById(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found"));
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto) {
		Employee employee = employeeRepository.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("Employee not found."));
		employee.setFirstName(employeeDto.getFirstName());
		employee.setLastName(employeeDto.getLastName());
		employee.setEmail(employeeDto.getEmail());
		Employee updatedEmployee = employeeRepository.save(employee);
		return EmployeeMapper.mapToEmployeeDto(updatedEmployee);
	}

	@SuppressWarnings("unused")
	@Override
	public void deleteEmployee(Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not found"));
		employeeRepository.deleteById(id);
	}

}
