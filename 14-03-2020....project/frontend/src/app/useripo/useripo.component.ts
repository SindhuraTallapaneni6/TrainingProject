import { Component, OnInit } from '@angular/core';
import { IpoService } from '../Service/ipo.service';
import { Ipo } from '../models/ipo';

@Component({
  selector: 'app-useripo',
  templateUrl: './useripo.component.html',
  styleUrls: ['./useripo.component.css']
})
export class UseripoComponent implements OnInit {

  ipoData:Ipo[];
  constructor(private ipoService:IpoService) { }

  ngOnInit() {
    this.ipoService.getAllIpos().subscribe(u =>{
      this.ipoData = u ;
    });

  }

}
