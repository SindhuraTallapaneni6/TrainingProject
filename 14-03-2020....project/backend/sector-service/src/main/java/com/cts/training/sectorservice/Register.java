package com.cts.training.sectorservice;

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
	private int otp; 
	
	@Transient
	private String regStatus;
	private String active="no";
   public  Register(){
		
	}
	public Register(int id, String fname, String lname, String uname, String email, String rpwd, String repwd,
			long phone, int otp) {
		super();
		this.id = id;
		this.firstname = fname;
		this.lastname = lname;
		this.username = uname;
		this.email = email;
		this.password = rpwd;
		this.repassword = repwd;
		this.phone = phone;
		this.otp = otp;
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
	public int getOtp() {
		return otp;
	}
	public void setOtp(int otp) {
		this.otp = otp;
	}
	
	public String getRegStatus() {
		return regStatus;
	}
	public void setRegStatus(String regStatus) {
		this.regStatus = regStatus;
	}
	public String getActive() {
		return active;
	}
	public void setActive(String active) {
		this.active = active;
	}
	@Override
	public String toString() {
		return "Register [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", username=" + username
				+ ", email=" + email + ", password=" + password + ", repassword=" + repassword + ", phone=" + phone
				+ ", otp=" + otp + "]";
	}
	
}