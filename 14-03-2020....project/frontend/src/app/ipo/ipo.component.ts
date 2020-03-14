import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/Service/ipo.service'
import { Router } from '@angular/router';
import { Ipo } from '../models/ipo';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {

  constructor(private ipoService: IpoService, private router: Router) { }
  ipoData: Ipo[];
  ngOnInit() {
    this.ipoService.getAllIpos().subscribe(data => {
      this.ipoData = data;
  });
}
deleteIpo(ipo : Ipo){
  this.ipoService.deleteIpo(ipo.id).subscribe();
  this.ipoData = this.ipoData.filter(u => ipo != ipo);
}
updateIpo(ipo : Ipo){
  localStorage.removeItem('ipoId');
  localStorage.setItem('ipoId', ipo.id.toString());
  this.router.navigate(['update-ipo']);
}

addIpo(){
  this.router.navigate(['addipo']);
}

}
