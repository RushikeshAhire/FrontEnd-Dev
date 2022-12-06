package com.nau.model;

public class EmployeeApp {
public static void main(String[] args) {
	
	
	Employee employee1 = new Employee(1, "naushad");
	Employee employee2 = new Employee(2, "akhtar");
	
	Employee employees[] = new Employee[2];
	employees[0]=employee1;
	employees[1]= employee2;
	EmployeeService employeeService = new EmployeeService();
	employeeService.addEmployee(employees);
}
}
