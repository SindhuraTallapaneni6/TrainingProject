import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    users:User[];
  constructor(private router:Router) { }

  ngOnInit() {
    sessionStorage.removeItem('userId')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('userType')
    alert("logged out successfully")
    this.router.navigate(['/login'])


  }

}
