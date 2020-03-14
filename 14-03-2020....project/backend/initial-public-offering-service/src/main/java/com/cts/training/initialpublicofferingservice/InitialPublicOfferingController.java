package com.cts.training.initialpublicofferingservice;

import java.util.List;

import java.util.NoSuchElementException;
//import java.util.Optional;

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
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.training.initialpublicofferingservice.InitialPublicOffering;;


@CrossOrigin(origins="*")
@RestController
public class InitialPublicOfferingController {
	@Autowired
	InitialPublicOfferingRepo ipoRepo;
	
	@Autowired
	InitialPublicOfferingService ipoService;
	
	@GetMapping(value="/ipo",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllIPOs(){
		List<InitialPublicOffering> list = ipoService.getAllIPOs();
		if(list.size()>0) {
			return new ResponseEntity<List<InitialPublicOffering>>(list, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("No ipos found",HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping(value="/ipo/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getIPOById(@PathVariable int id){
	
		try {
			InitialPublicOffering initialPublicOffering =  ipoService.getIPOById(id);
			return new ResponseEntity<InitialPublicOffering>(initialPublicOffering, HttpStatus.OK);
		}catch(NoSuchElementException e){
			return new ResponseEntity<String>("no such ipo", HttpStatus.NOT_FOUND);
		}
		
		
		
	}
	
	@PostMapping(value="/ipo")
	public ResponseEntity<?> addIPO(@RequestBody InitialPublicOffering ipo){
	
		try {
			ipoService.addIPO(ipo);
			return new ResponseEntity<InitialPublicOffering>(ipo, HttpStatus.OK);
	   	}catch (Exception e) {
	   		return new ResponseEntity<String>("cannot add ipo", HttpStatus.NOT_FOUND);
	   	}
	}
	@DeleteMapping(value="/ipo/{id}")
	public ResponseEntity<?> deleteIPO(@PathVariable int id){
		try {
			 ipoService.deleteIPO(id);
			return new ResponseEntity<InitialPublicOffering>( HttpStatus.OK);
		}
			catch(Exception e) {
				return new ResponseEntity<InitialPublicOffering>( HttpStatus.OK);
			}
		
	}
	@PutMapping(value = "/ipo")
	public ResponseEntity<InitialPublicOffering> update(@RequestBody InitialPublicOffering ipo) {
		ipo = ipoService.updateIPO(ipo);
		return new ResponseEntity<InitialPublicOffering>(ipo,HttpStatus.OK);
	}


}
