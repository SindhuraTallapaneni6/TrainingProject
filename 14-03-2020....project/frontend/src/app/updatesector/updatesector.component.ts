import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SectorService } from '../Service/sector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatesector',
  templateUrl: './updatesector.component.html',
  styleUrls: ['./updatesector.component.css']
})
export class UpdatesectorComponent implements OnInit {
  updateSectorform: FormGroup;
  constructor(private formBuilder: FormBuilder, private sectorService: SectorService, private router: Router) { }

  ngOnInit() {
    this.updateSectorform= this.formBuilder.group({
      id: ['',Validators.required],
      name: ['', Validators.required],
      brief:  ['',[Validators.required]]     
    });
    const id = localStorage.getItem('sectorId');
    if(+id > 0){
      this.sectorService.getSectorById(+id).subscribe(sector => {
             this.updateSectorform.patchValue(sector);
      });
    }
  }

  updateTheSector(){
    this.sectorService.updateSectorInfo(this.updateSectorform.value).subscribe(u => {
      this.router.navigate(['updatesector']);
    });
  }
  onSubmit(){
    console.log(this.updateSectorform.value);
  }

}
