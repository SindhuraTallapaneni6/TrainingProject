package com.cts.training.initialpublicofferingservice;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.initialpublicofferingservice.InitialPublicOffering;

@Service
public class InitialPublicOfferingSeviceImpl implements InitialPublicOfferingService{
	
	@Autowired
	InitialPublicOfferingRepo ipoRepo;

	@Override
	public InitialPublicOffering addIPO(InitialPublicOffering ipo) {
		InitialPublicOffering publicOffering = new InitialPublicOffering();
		BeanUtils.copyProperties(ipo, publicOffering);
		ipoRepo.save(publicOffering);
		return publicOffering;
	}

	@Override
	public void deleteIPO(int id) {
		ipoRepo.deleteById(id);
		
	}

	@Override
	public InitialPublicOffering updateIPO(InitialPublicOffering ipo) {
		InitialPublicOffering publicOffering = new InitialPublicOffering();
		BeanUtils.copyProperties(ipo, publicOffering);
		ipoRepo.save(publicOffering);
		return publicOffering;
	}

	@Override
	public List<InitialPublicOffering> getAllIPOs() {
		List<InitialPublicOffering> entities = ipoRepo.findAll();
		List<InitialPublicOffering> initialPublicOfferings = new ArrayList<InitialPublicOffering>();
		for(InitialPublicOffering entity: entities) {
			InitialPublicOffering offering = new InitialPublicOffering();
			BeanUtils.copyProperties(entity, offering);
			initialPublicOfferings.add(offering);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+initialPublicOfferings);
		return initialPublicOfferings;
		
	}

	@Override
	public InitialPublicOffering getIPOById(int id) {
		Optional<InitialPublicOffering> ipos = ipoRepo.findById(id);
		InitialPublicOffering publicOffering = new InitialPublicOffering();
		BeanUtils.copyProperties(ipos.orElse(new InitialPublicOffering()), publicOffering);
		return publicOffering;
	}

}
