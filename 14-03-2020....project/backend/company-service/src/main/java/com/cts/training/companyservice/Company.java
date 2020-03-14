package com.cts.training.companyservice;

import javax.persistence.Entity;


import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;



@Entity
@Table(name="company_table")
@XmlRootElement(name="com")
public class Company {
	@Id
	@GeneratedValue
	private int id;
	private String companyname;
	private String sector;
	private String ceo;
	private String bod;
	private String companyCode;
	private double turnover;
	
	public Company() {
		
		
	}

	

	public Company(int id, String companyname, String sector, String ceo, String bod, String companyCode,
			double turnover) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.sector = sector;
		this.ceo = ceo;
		this.bod = bod;
		this.companyCode = companyCode;
		this.turnover = turnover;
	}



	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getSector() {
		return sector;
	}

	public void setSector(String sector) {
		this.sector = sector;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public String getBod() {
		return bod;
	}

	public void setBod(String bod) {
		this.bod = bod;
	}

	public double getTurnover() {
		return turnover;
	}

	public void setTurnover(double turnover) {
		this.turnover = turnover;
	}
	

	public String getCompanyCode() {
		return companyCode;
	}



	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}



	@Override
	public String toString() {
		return "Company [id=" + id + ", companyname=" + companyname + ", sector=" + sector + ", ceo=" + ceo + ", bod="
				+ bod + ", companyCode=" + companyCode + ", turnover=" + turnover + "]";
	}



	


	

	}