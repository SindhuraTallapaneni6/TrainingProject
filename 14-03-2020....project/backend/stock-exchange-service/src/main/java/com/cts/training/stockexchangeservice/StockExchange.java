package com.cts.training.stockexchangeservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "stockexchange_table")
@Component(value = "stock")
public class StockExchange {

	@Id
	@GeneratedValue
	private int id;
	private String exchangename;
	private String contactaddress;
	private String brief;
	private String remarks;


	public StockExchange() {

	}

	public StockExchange(int id, String exchangename, String contactaddress, String brief, String remarks) {
		super();
		this.id = id;
		this.exchangename = exchangename;
		this.contactaddress = contactaddress;
		this.brief = brief;
		this.remarks = remarks;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getExchangename() {
		return exchangename;
	}

	public void setExchangename(String exchangename) {
		this.exchangename = exchangename;
	}

	

	public String getContactaddress() {
		return contactaddress;
	}

	public void setContactaddress(String contactaddress) {
		this.contactaddress = contactaddress;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", exchangename=" + exchangename + ", contactaddress=" + contactaddress
				+ ", brief=" + brief + ", remarks=" + remarks + "]";
	}

	

	

	
}