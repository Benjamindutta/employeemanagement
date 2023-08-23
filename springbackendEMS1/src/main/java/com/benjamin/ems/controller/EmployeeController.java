package com.benjamin.ems.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.benjamin.ems.exception.ResourceNotFoundException;
import com.benjamin.ems.model.Employee;
import com.benjamin.ems.repository.EmployeeRepository;


@RestController
@RequestMapping("/api/v1/")
@CrossOrigin("*")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	// get all employees
	@GetMapping("employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();
	}

	@PostMapping("employees")
	public Employee createEmployee(@RequestBody Employee employee) {

		return employeeRepository.save(employee);

	}

	@GetMapping("employees/{id}")
	public ResponseEntity<Employee> getEmployeebyId(@PathVariable Long id) {
		return ResponseEntity.ok(employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id)));
	}

	@PutMapping("employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employee) {
		Employee e = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found with id " + id));
		e.setEmailId(employee.getEmailId());
		e.setFirstName(employee.getFirstName());
		e.setLastName(employee.getLastName());
		return ResponseEntity.ok(employeeRepository.save(e));
	}

	@DeleteMapping("employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) {
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("user with id not found"));

		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
