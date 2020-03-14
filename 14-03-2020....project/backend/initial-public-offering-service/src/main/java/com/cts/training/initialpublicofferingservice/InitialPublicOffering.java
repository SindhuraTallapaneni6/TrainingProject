package com.cts.training.initialpublicofferingservice;

import java.io.Serializable;

import java.time.LocalDateTime;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "ipo_table")
@Component(value = "ipo")
public class InitialPublicOffering implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 6020793200390906169L;
	@Id
	@GeneratedValue
	private int id;
	private String companyname;
	private String stockexchange;
	private long pricepershare;
	private long totalstocks;
	private LocalDateTime opendatetime;
	private String remarks;

	public InitialPublicOffering() {

	}

	public InitialPublicOffering(int id, String companyname, String stockexchange, long pricepershare, long totalstocks,
			LocalDateTime opendatetime, String remarks) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.stockexchange = stockexchange;
		this.pricepershare = pricepershare;
		this.totalstocks = totalstocks;
		this.opendatetime = opendatetime;
		this.remarks = remarks;
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

	public String getStockexchange() {
		return stockexchange;
	}

	public void setStockexchange(String stockexchange) {
		this.stockexchange = stockexchange;
	}

	public long getPricepershare() {
		return pricepershare;
	}

	public void setPricepershare(long pricepershare) {
		this.pricepershare = pricepershare;
	}

	public long getTotalstocks() {
		return totalstocks;
	}

	public void setTotalstocks(long totalstocks) {
		this.totalstocks = totalstocks;
	}

	public LocalDateTime getOpendatetime() {
		return opendatetime;
	}

	public void setOpendatetime(LocalDateTime opendatetime) {
		this.opendatetime = opendatetime;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "InitialPublicOffering [id=" + id + ", companyname=" + companyname + ", stockexchange=" + stockexchange
				+ ", pricepershare=" + pricepershare + ", totalstocks=" + totalstocks + ", opendatetime=" + opendatetime
				+ ", remarks=" + remarks + "]";
	}

}