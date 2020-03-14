package com.cts.training.companyservice;

import java.util.List;

import com.cts.training.companyservice.CompanyService;




public interface CompanyService {
	
	//public CompanyDTO insert(CompanyDTO cd);
	public Company addCompany(Company company);
	public void deleteCompany(int id);
	public Company updateCompany(Company company);
	public List<Company> getAllCompanies();
	public Company getCompanyById(int id);
	

}
