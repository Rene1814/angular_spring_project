package com.rsolucoes.angularspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rsolucoes.angularspring.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
