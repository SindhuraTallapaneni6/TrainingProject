package com.cts.training.stockexchangeservice;

import java.util.List;



public interface StockExchangeService {
	
	public StockExchange addStock(StockExchange stock);
	public void deleteStock(int id);
	public StockExchange updateStock(StockExchange stock);
	public List<StockExchange> getAllStocks();
	public StockExchange getStockById(int id);

}
