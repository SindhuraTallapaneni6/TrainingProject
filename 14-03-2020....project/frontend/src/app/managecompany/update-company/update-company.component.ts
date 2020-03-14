import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/Service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  updateCompany : FormGroup;
  constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private router: Router) { }

  ngOnInit() {
    this.updateCompany = this.formBuilder.group({
      id: [],
      companyname: ['', Validators.required],
      ceo: ['', Validators.required],
      bod: ['', Validators.required],
      turnover: ['', Validators.required],
      sector: ['', Validators.required]


    })
    const id = localStorage.getItem('comId');
    if(+id > 0){
      this.companyService.getCompanyById(+id).subscribe(com => {
             this.updateCompany.patchValue(com);
      });
    }
  }
  updateTheCompany(){
    this.companyService.updateCompanyInfo(this.updateCompany.value).subscribe(u => {
      this.router.navigate(['company']);
    });
  }

  onSubmit(){
    console.log(this.updateCompany.value);
  }
}
