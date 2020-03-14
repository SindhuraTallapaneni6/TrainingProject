package com.cts.training.sectorservice;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



//@FeignClient("user-service")
//@FeignClient(name ="", url="http://localhost:8000")
@FeignClient("netflix-zuul-api-gateway-server")
public interface UserServiceProxy {
	
	@RequestMapping(value="/user-service/register", method= RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Register> findAll();
	
	

}
