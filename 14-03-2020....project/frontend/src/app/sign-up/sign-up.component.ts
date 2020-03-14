import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
// import { PasswordValidation } from 'src/app/models/password';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    signupform :FormGroup
    users:User[] = [];
  constructor(private formBuilder:FormBuilder, private userService:UserService) {   }

  ngOnInit() {
    this.signupform=this.formBuilder.group({
      id:['',[Validators.required]],
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      username:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required , Validators.minLength(6)]],
      repassword:['',[Validators.required]],
      phone:['',[Validators.required, Validators.minLength(10)]],
     
    
    });
    this.userService.getAllUsers().subscribe(u =>{this.users = u;})

  }
  emailVaild(e:String){
    for(let user of this.users)
    {
      if(user.email===e){
        return false;
      }
      }
      return true;
  }
  addUser(){
    let e=this.signupform.controls.email.value;
    if(this.emailVaild(e)){
    this.userService.saveUser(this.signupform.value).subscribe(data => {
       alert('User Inserted Successfully' +data);
       alert('coming status'+data.regstatus);
       alert('Registered Successfully')
       this.signupform.reset()
      }); 
    }
      else
      {
        alert('already Email exsits')
        this.signupform.reset()
      }
   }
   
//   addUser(){
//     this.userService.saveUser(this.signupform.value).subscribe(data => {
     
//       if(data.res==0){
//         alert("User Already Avaialable");
//       }
//          else if(data.res==1){
//           console.log("User Details are Entered Successfully");
          
//         alert("Added New User");
//         }
//         else{
//           alert("ERROR");
//         }

//     });
//  }

  // onSubmit(){

  //   console.log(this.signupform.value);

  // }
//   onSubmit(){
//     this.userService.reg().subscribe(dt =>{
//       console.log("coming status::::" +dt.reg);
//     })

// }
}