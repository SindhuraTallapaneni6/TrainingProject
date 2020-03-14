package com.cts.training.sectorservice;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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





@RestController
@CrossOrigin(origins="*")
public class SectorRestServiceController {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserServiceProxy userservice;
	
	@Autowired
	SectorRepo sectorRepo;
	
	@Autowired
	SectorService sectorService;
	
	@GetMapping(value="/sector",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getAllSectors(){
		List<Sector> list = sectorService.getAllSectors();
		if(list.size()>0) {
			return new ResponseEntity<List<Sector>>(list, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<String>("No Stocks found",HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping(value="/sector/{id}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> getSectorById(@PathVariable int id){
		try {
			Sector sector =  sectorService.getSectorById(id);
			return new ResponseEntity<Sector>(sector, HttpStatus.OK);
		}catch(NoSuchElementException e){
			return new ResponseEntity<String>("no such Sector", HttpStatus.NOT_FOUND);
		}
	}
	@PostMapping(value="/sector")
	public ResponseEntity<?> addSector(@RequestBody Sector sector){
		try {
			sectorService.addSector(sector);
			return new ResponseEntity<Sector>(sector, HttpStatus.OK);
	   	}catch (Exception e) {
	   		return new ResponseEntity<String>("cannot add sector", HttpStatus.NOT_FOUND);
	   	}
	}
	@DeleteMapping(value="/sector/{id}")
	public ResponseEntity<?> deleteSector(@PathVariable int id){
		 sectorService.deleteSector(id);
			return new ResponseEntity<Sector>( HttpStatus.OK);
	}
	@PutMapping(value = "/sector")
	public ResponseEntity<Sector> update(@RequestBody Sector sector) {
		sector = sectorService.updateSector(sector);
		return new ResponseEntity<Sector>(sector,HttpStatus.OK);
		
	}
	@RequestMapping(value="/usersbysector", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Register> findAllSectors()
	{
		logger.info("Get All users Invoked");
		List<Register> users = userservice.findAll();
		logger.info("Information-->{}", users);
//		return userservice.findAll();
		return users;
		
	}


}
