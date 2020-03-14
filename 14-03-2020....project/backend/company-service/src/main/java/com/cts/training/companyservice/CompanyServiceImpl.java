package com.cts.training.companyservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.companyservice.CompanyRepo;


import com.cts.training.companyservice.Company;

import com.cts.training.companyservice.CompanyService;

@Service
public class CompanyServiceImpl implements CompanyService{
	
	@Autowired
	CompanyRepo companyRepo;
	
	@Override
	public Company addCompany(Company com) {
		Company company = new Company();
		BeanUtils.copyProperties(com, company);
		companyRepo.save(company);
		
		
		return company;
		
	}

	@Override
	public void deleteCompany(int id) {
		companyRepo.deleteById(id);
	}

	@Override
	public Company updateCompany(Company  companyDTO) {
		Company company = new Company();
		BeanUtils.copyProperties(companyDTO, company);
		companyRepo.save(company);
		return companyDTO;
		
		
	}

	@Override
	public List<Company> getAllCompanies() {
		List<Company> entities = companyRepo.findAll();
		List<Company> companyDTOs = new ArrayList<Company>();
		for(Company entity: entities) {
			Company companyDTO = new Company();
			BeanUtils.copyProperties(entity, companyDTO);
			companyDTOs.add(companyDTO);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+companyDTOs);
		return companyDTOs;
		
	}

	@Override
	public Company getCompanyById(int id) {
		Optional<Company> companies = companyRepo.findById(id);
		Company companyDTO = new Company();
		BeanUtils.copyProperties(companies.orElse(new Company()), companyDTO);
		return companyDTO;
		
	}

}
