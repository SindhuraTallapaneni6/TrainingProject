package com.cts.training.stockexchangeservice;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.training.stockexchangeservice.StockExchange;

@Service
public class StockExchangeServiceImpl implements StockExchangeService{
	@Autowired
	StockExchangeRepo stockExchangeRepo;

	@Override
	public StockExchange addStock(StockExchange stock) {
		
		StockExchange stockExchange = new StockExchange();
		BeanUtils.copyProperties(stock, stockExchange);
		stockExchangeRepo.save(stockExchange);
		return stockExchange;
	}

	@Override
	public void deleteStock(int id) {
		stockExchangeRepo.deleteById(id);
		
	}

	@Override
	public StockExchange updateStock(StockExchange stock) {
		StockExchange stockExchange = new StockExchange();
		BeanUtils.copyProperties(stock, stockExchange);
		stockExchangeRepo.save(stockExchange);
		
		return stock;
	}

	@Override
	public List<StockExchange> getAllStocks() {
		List<StockExchange> entities = stockExchangeRepo.findAll();
		List<StockExchange> exchanges = new ArrayList<StockExchange>();
		for(StockExchange entity: entities) {
			StockExchange stockExchange = new StockExchange();
			BeanUtils.copyProperties(entity, stockExchange);
			exchanges.add(stockExchange);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+exchanges);
		return exchanges;
		
	}

	@Override
	public StockExchange getStockById(int id) {
		Optional<StockExchange> stocks = stockExchangeRepo.findById(id);
		StockExchange stockExchange = new StockExchange();
		BeanUtils.copyProperties(stocks.orElse(new StockExchange()), stockExchange);
		return stockExchange;

	}
	
	

}
