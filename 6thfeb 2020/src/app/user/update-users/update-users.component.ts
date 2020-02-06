import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from 'src/app/Service/user.service';
import { User} from 'src/app/models/user'

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {
  updateUser : FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  

  ngOnInit() {
    this.updateUser = this.formBuilder.group({
      id: [],
      lname: ['', Validators.required],
      fname: ['', Validators.required],
      uname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rpwd:  ['',[Validators.required]],
      repwd: ['',[Validators.required]],
      otp: ['',[Validators.required]],
      phone: ['', Validators.required]
    });
  
  const id = localStorage.getItem('userId');
    if(+id > 0){
      this.userService.getUserById(+id).subscribe(user => {
             this.updateUser.patchValue(user);
      });
    }
  }
  updateTheUser(){
    this.userService.updateUserInfo(this.updateUser.value).subscribe(u => {
      this.router.navigate(['users']);
    });
  }
  onSubmit(){
    console.log(this.updateUser.value);
  }

}
