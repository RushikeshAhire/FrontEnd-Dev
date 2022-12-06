package com.nau.model;

public class EmployeeService {
	
	public void addEmployee(Employee... employees) {
		
		//System.out.println(employees);
		for(Employee e : employees) {
			e.setFname(e.getFname().toUpperCase());
			System.out.println(e);
		}
		
//		employee.setFname(employee.getFname().toUpperCase());
//		System.out.println("Object changed");
//		System.out.println(employee);
	}

}
