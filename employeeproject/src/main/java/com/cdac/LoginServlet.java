package com.cdac;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public LoginServlet() {
		System.out.println("Login Servlet Created");
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("GET MEthod");
		String uname = request.getParameter("uname");
		String names[] = {"nau","akh","abhi"};
		PrintWriter out = response.getWriter();
		String message="User Available";
		for(String name : names) {
			if(uname.equals(name)) {
				message ="User Already Exists";
				break;
			}
		}
		out.print(message);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("POST MEthod");
		String uname = request.getParameter("uname");
		System.out.println(uname);
		String names[] = {"nau","akh","abhi"};
		PrintWriter out = response.getWriter();
		String message="User Available";
		for(String name : names) {
			if(uname.equals(name)) {
				message ="User Already Exists";
				break;
			}
		}
		out.print(message);
	}

}
