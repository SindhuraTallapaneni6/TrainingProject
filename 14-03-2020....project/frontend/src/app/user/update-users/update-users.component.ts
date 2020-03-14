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
  updateProfileForm: FormGroup;
  constructor(private service: UserService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.updateProfileForm = this.formBuilder.group({
      id: [],
      username:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],    
      password:[],
      phone: ['', Validators.required],
      active:['']
    });
    const id = sessionStorage.getItem('userId');
    if(+id)
    {
    this.service.getUserById(+id).subscribe(user => {
      this.updateProfileForm.patchValue(user);
    });
  }
}
updateTheUser(){
  this.service.updateUserInfo(this.updateProfileForm.value).subscribe(u=>{
    this.router.navigate(['userProfile'])
  });
}

}
