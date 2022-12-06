package com.nau.model;

public class Employee {

	private int id;
	private String fname;
	public Employee() {
		// TODO Auto-generated constructor stub
	}
	public Employee(int id, String fname) {
		super();
		this.id = id;
		this.fname = fname;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	@Override
	public String toString() {
		return "Employee [id=" + id + ", fname=" + fname + "]";
	}
	
	
}
