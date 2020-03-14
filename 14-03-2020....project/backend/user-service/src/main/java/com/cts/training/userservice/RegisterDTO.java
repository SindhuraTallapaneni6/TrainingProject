package com.cts.training.userservice;

public class RegisterDTO {
	
	private int id;
	private String firstname;
	private String lastname;
	private String username;
	private String email;
	private String password;
	private String repassword;
	private long phone;
	
	
	public RegisterDTO() {
		
	}
	
	

	public RegisterDTO(int id, String firstname, String lastname, String username, String email, String password,
			String repassword, long phone) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.email = email;
		this.password = password;
		this.repassword = repassword;
		this.phone = phone;
	
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



	@Override
	public String toString() {
		return "RegisterDTO [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", username="
				+ username + ", email=" + email + ", password=" + password + ", repassword=" + repassword + ", phone="
				+ phone + "]";
	}

	



	
	

}
