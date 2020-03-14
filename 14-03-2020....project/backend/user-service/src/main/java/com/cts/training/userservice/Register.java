package com.cts.training.userservice;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlRootElement;

import org.springframework.stereotype.Component;

@Entity
@Table(name= "register_table") 
@XmlRootElement(name="reg")
public class Register implements Serializable{

	private static final long serialVersionUID = -8087800141201379851L;
	@Id
	@GeneratedValue
	private int id;
	private String firstname;
	private String lastname;
	private String username;
	private String email;
	private String password;
	private String repassword;
	private long phone;
	
	private String userType="ROLE_USER";
	
//	@Transient
//	private String regStatus;
	private boolean  active=false;
   public  Register(){
		
	}
	
	

	public Register(int id, String firstname, String lastname, String username, String email, String password,
		String repassword, long phone, String userType, boolean active) {
	super();
	this.id = id;
	this.firstname = firstname;
	this.lastname = lastname;
	this.username = username;
	this.email = email;
	this.password = password;
	this.repassword = repassword;
	this.phone = phone;
	
	this.userType = userType;
	this.active = active;
}



	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRepassword() {
		return repassword;
	}
	public void setRepassword(String repassword) {
		this.repassword = repassword;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	
	
	
	
	
	public boolean isActive() {
		return active;
	}



	public void setActive(boolean active) {
		this.active = active;
	}



	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}



	@Override
	public String toString() {
		return "Register [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", username=" + username
				+ ", email=" + email + ", password=" + password + ", repassword=" + repassword + ", phone=" + phone
				+ ", userType=" + userType + ", active=" + active + "]";
	}



	
	
	
}