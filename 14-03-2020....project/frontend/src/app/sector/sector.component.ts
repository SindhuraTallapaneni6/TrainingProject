import { Component, OnInit } from '@angular/core';
import { SectorService } from '../Service/sector.service';
import { Router } from '@angular/router';
import { Sector } from '../models/sector';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  constructor(private sectorService: SectorService, private router: Router) { }
  sectorsData: Sector[];

  ngOnInit() {
    this.sectorService.getAllSectors().subscribe(sector =>{
      this.sectorsData = sector;
    });
  }
  deleteSector(sector : Sector){
    this.sectorService.deleteSector(sector.id).subscribe();
    this.sectorsData = this.sectorsData.filter(s => s != sector);
  }
  updateSector(sector : Sector){
    localStorage.removeItem('sectorId');
    localStorage.setItem('sectorId', sector.id.toString());
    this.router.navigate(['updatesector']);
  }

}
