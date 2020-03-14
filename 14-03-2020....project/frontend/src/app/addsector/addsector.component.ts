import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SectorService } from '../Service/sector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsector',
  templateUrl: './addsector.component.html',
  styleUrls: ['./addsector.component.css']
})
export class AddsectorComponent implements OnInit {
  addsectorform: FormGroup;
  constructor( private formBuilder: FormBuilder, private sectorService: SectorService, private router: Router) { }

  ngOnInit() {
    this.addsectorform = this.formBuilder.group({
      id: ['',Validators.required],
      name: ['', Validators.required],
      brief:  ['',[Validators.required]]     
    });
  }
  addSector(){
    this.sectorService.saveSector(this.addsectorform.value).subscribe(data => {
      console.log('ipo details Inserted Successfully');
    });
  
  }
  onSubmit(){
    console.log(this.addsectorform.value);
  
  }

}
