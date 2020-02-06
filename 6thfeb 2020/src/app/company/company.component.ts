import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../Service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }
  companyData: Company[];
  ngOnInit() {
    this.companyService.getAllUsers().subscribe(data => {
      this.companyData = data;
  });
}
deleteUser(company : Company){
  this.companyService.deleteUser(company.cid).subscribe();
  this.companyData = this.companyData.filter(u => company != company);
}
updateUser(company : Company){
  localStorage.removeItem('userId');
  localStorage.setItem('userId', company.cid.toString());
  this.router.navigate(['update-user']);
}


  

}
