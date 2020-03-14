package com.cts.training.userservice;
import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

import javax.mail.internet.MimeMessage;

//import javax.websocket.server.ServerEndpoint;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.cts.training.userservice.RegisterDTO;
import com.cts.training.userservice.Register;
import com.cts.training.userservice.RegisterRepo;
import com.cts.training.userservice.RegisterService;

@Service
public class RegisterServiceImpl implements RegisterService {
	@Autowired
	RegisterRepo registerRepo;
	@Autowired
	JavaMailSender javaMailSender;
	
	@Override
	public Register addUser(Register register) {
			Register reg = new Register();
			try {
				MimeMessage mimeMessage=javaMailSender.createMimeMessage();
				MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,"utf-8");
				helper.setFrom("sindhura200698@gmail.com");			
				helper.setTo(register.getEmail());
				helper.setSubject("verification mail");
				//sm.setText("This is testing mail");
				helper.setText("Account created click on <a href='http://localhost:4200/activate?"+register.getEmail()+"'>Click Here To Verify</a>",true);
				javaMailSender.send(mimeMessage);
				//logger.info("sending mail..");
				BeanUtils.copyProperties(register, reg);
				registerRepo.save(reg);
			}
		catch(Exception e) {e.printStackTrace();}
		return register;
	}
	
//	@Override
//	public Register addUser(Register rd) {
//		registerRepo.save(rd);
//		try {
//			SimpleMailMessage sm = new SimpleMailMessage();
//			sm.setFrom("sindhura200698@gmail.com");
//			sm.setTo(rd.getEmail());
//			sm.setSubject("verfication mail");
//			sm.setText("Account created click on <a href='http://localhost:4200/activate?"+rd.getEmail()+"'>Click</a>");
//			javaMailSender.send(sm);
//			System.out.println("sending mail.....");
//			}
//		catch(Exception e) {e.printStackTrace();}
//		return rd;
//	}
	@Override
	public String activate(@RequestBody String email) {
		String str=email.substring(email.indexOf(":")+2,email.lastIndexOf("\""));
	System.out.println("emil ::"+str);
	Register user=	registerRepo.findByEmail(str);
	System.out.println("uname :"+user.getEmail());
	user.setActive(true);
    user = registerRepo.save(user);
       return "{\"status\":\"ok\"}";
	}
	@Override
	public List<Register> getAllUsers(){
		List<Register> entities = registerRepo.findAll();
		List<Register> usersDTO = new ArrayList<Register>();
		for(Register entity: entities) {
			Register userDTO = new Register();
			BeanUtils.copyProperties(entity, userDTO);
			usersDTO.add(userDTO);
		}
		System.out.println("Entity: "+entities);
		System.out.println("DTO: "+usersDTO);
		return usersDTO;
		//return registerRepo.findAll();
	}
	
	@Override
	public void deleteUser(int id) {
		registerRepo.deleteById(id);
	}
	@Override
	public Register getUserById(int id){
		Optional<Register> users = registerRepo.findById(id);
		Register registerDTO = new Register();
		BeanUtils.copyProperties(users.orElse(new Register()), registerDTO);
		return registerDTO;
	}
//
//	@Override
//	public RegisterDTO getById(int id) {
//		//Register reg=user.findById(id)
//		
//		return null;
//	}
//	@Override
//	public boolean activateUser(String email) {
//		System.out.println(email);
//		Register users = user.findByEmail(email).get();
//		System.out.println(users);
//		if(!users.isConfirmed()) {
//			System.out.println(users);
//			users.setConfirmed(true);
//			user.save(users);
//			return true;
//		}
//		else {
//			return false;
//		}
//	}
	
	@Override
	public Register updateUser(Register registerDTO) {
		Register reg = new Register();
		BeanUtils.copyProperties(registerDTO, reg);
		registerRepo.save(reg);
		return registerDTO;
	}
	@Override
	public Register  getUserByUsernameAndPassword(String username, String password) {
		Register register = registerRepo. getUserByUsernameAndPassword(username, password);
		return register;
	}
	
}