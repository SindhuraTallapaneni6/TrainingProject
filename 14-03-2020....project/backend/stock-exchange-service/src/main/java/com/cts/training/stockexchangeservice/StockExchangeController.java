 package com.cts.training.stockexchangeservice;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.cts.training.stockexchangeservice.StockExchange;

@CrossOrigin(origins="*")
@RestController
public class StockExchangeController {
	@Autowired
	StockExchangeRepo stockExchangeRepo;
	
	@Autowired
	StockExchangeService stockExchangeService;
	
	@GetMapping(value="/stockexchange",produces = MediaType.APPLICATION_JSON_VALUE)

	public ResponseEntity<?> getAllStocks(){
		List<StockExchange> list = stockExchangeService.getAllStocks();
		if(list.size()>0) {
			return new ResponseEntity<List<StockExchange>>(list, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("No stocks found",HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping(value="/stockexchange/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getStockById(@PathVariable int id){
		try {
			StockExchange stockExchange =  stockExchangeService.getStockById(id);
			return new ResponseEntity<StockExchange>(stockExchange, HttpStatus.OK);
		}catch(NoSuchElementException e){
			return new ResponseEntity<String>("no such stockexchange", HttpStatus.NOT_FOUND);
		}
		
		
	}
	
	@PostMapping(value="/stockexchange")
	public ResponseEntity<?> addStockExchange(@RequestBody StockExchange stock){
	
		try {
			stockExchangeService.addStock(stock);
			return new ResponseEntity<StockExchange>(stock, HttpStatus.OK);
	   	}catch (Exception e) {
	   		return new ResponseEntity<String>("cannot add stock", HttpStatus.NOT_FOUND);
	   	}
	}
	@DeleteMapping(value="/stockexchange/{id}")
	public ResponseEntity<?> deleteStock(@PathVariable int id){
		try {
			 stockExchangeService.deleteStock(id);
			return new ResponseEntity<StockExchange>( HttpStatus.OK);
		}
			catch(Exception e) {
				return new ResponseEntity<StockExchange>( HttpStatus.OK);
			}
		
	}
	@PutMapping(value = "/stockexchange")
	public ResponseEntity<StockExchange> update(@RequestBody StockExchange stock) {
		stock = stockExchangeService.updateStock(stock);
		return new ResponseEntity<StockExchange>(stock,HttpStatus.OK);
	}

}
