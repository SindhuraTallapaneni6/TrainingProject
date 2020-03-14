import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  isAdmin:boolean;
  constructor(private userService:UserService) {
    this.isAdmin=userService.isAdmin();
   }

  ngOnInit() {
  }

}
