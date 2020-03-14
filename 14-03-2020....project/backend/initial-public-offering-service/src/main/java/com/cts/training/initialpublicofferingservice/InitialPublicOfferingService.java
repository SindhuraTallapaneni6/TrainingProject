package com.cts.training.initialpublicofferingservice;

import java.util.List;

import com.cts.training.initialpublicofferingservice.InitialPublicOffering;

public interface InitialPublicOfferingService {
	public  InitialPublicOffering addIPO(InitialPublicOffering ipo);
	public void deleteIPO(int id);
	public InitialPublicOffering updateIPO(InitialPublicOffering ipo);
	public List<InitialPublicOffering> getAllIPOs();
	public InitialPublicOffering getIPOById(int id);

}
