import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './Service/authservice.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userLoggedIn : boolean = false;
  title = 'StockExchange';
  constructor(private auth : AuthserviceService){}

  ngDoCheck(){
    this.userLoggedIn = this.auth.isUserLoggedIn();
  }
}
