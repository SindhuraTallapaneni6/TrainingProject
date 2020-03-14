import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../Service/user.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../Service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup;
  users:User[];
  currentUser: User;

  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router,private authService:AuthserviceService) { }

  ngOnInit() {
    this.loginform=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
      //rememberme:false
    });
    this.userService.getAllUsers().subscribe(u =>{
      this.users = u;
    });

  }

  isValid(){
    console.log("hello");
    let username = this.loginform.get("username").value;
    let password = this.loginform.get("password").value;
    const result=this.authService.authenticate(username,password);
  result.subscribe(data=>{
    sessionStorage.setItem('userId', data.id.toString());
    console.log(data);
    
    if(data.userType == "ROLE_ADMIN"){
      this.router.navigate(['/adminlanding']);
    }
    else
    this.router.navigate(['/userlanding']);
  })
  }
  // isValid(){
  //   let admin_userName="admin";
  //   let admin_password="admin";
  //   let userName = this.loginform.controls.username.value;
  //   let pass = this.loginform.controls.password.value;
  //   if((userName == admin_userName) && ( pass == admin_password)){
  //     this.router.navigate(['/adminlanding']);
  //   }
  //   else{
  //     if(this.login(userName,pass)){
  //       if(this.userService.isActivated(this.currentUser)){
  //         localStorage.removeItem('userId');
  //         localStorage.setItem('userId',this.currentUser.id.toString());
  //         this.router.navigate(['/users']);
  //       }
  //       else{
  //         alert("Please Activate Your Account to Login")
  //       }
  //     }else{
  //       console.log(this.loginform.value);
  //       alert("Invalid UserName And Password");
  //       this.loginform.reset();
  //     }
  //   }
  // }
  // login(userName: string, passWord : string){
  //   for(let user of this.users){
  //     if((userName == user.username) &&(passWord  == user.password)){
  // this.currentUser = user;
  // return true;
  //     }
  //   }
  //   return false;
  // }
 
  onSubmit(){
    console.log("onsubmit",this.loginform.value);

  }

}