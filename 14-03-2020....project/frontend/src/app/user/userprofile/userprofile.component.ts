import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import { AuthserviceService } from 'src/app/Service/authservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user:User;
  constructor(private router: Router, private service:UserService,authService:AuthserviceService) { }
    ngOnInit() {
      const id = sessionStorage.getItem('userId');
      if(+id >0 ){
      this.service.getUserById(+id).subscribe(data =>{
        this.user=data;
      });
    }
    }
    updateUser(){
      this.router.navigate(['/updateprofile']);
    }
    updatePassword(){
      this.router.navigate(['/changepassword']);
    }

}
