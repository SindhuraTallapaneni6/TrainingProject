import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {
   adlogform: FormGroup;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  addSector(){
    this.router.navigate(['addsector']);
  }

}
