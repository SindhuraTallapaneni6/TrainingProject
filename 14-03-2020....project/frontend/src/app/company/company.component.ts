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
    this.companyService.getAllCompanies().subscribe(data => {
      this.companyData = data;
  });
}
deleteCompany(company : Company){
  this.companyService.deleteCompany(company.id).subscribe();
  this.companyData = this.companyData.filter(u => company != company);
}
updateCompany(company : Company){
  localStorage.removeItem('comId');
  localStorage.setItem('comId', company.id.toString());
  this.router.navigate(['update-company']);
}


  

}
