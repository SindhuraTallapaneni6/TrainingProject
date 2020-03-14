import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CompanyService } from 'src/app/Service/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  addcompanyform : FormGroup;
  constructor(private formBuilder:FormBuilder, private companyService:CompanyService) { }

  ngOnInit() {
    this.addcompanyform=this.formBuilder.group({
      id:['',[Validators.required]],
      companyname:['',[Validators.required]],
      ceo:['',[Validators.required]],
      bod:['',[Validators.required]],
      turnover:['',[Validators.required]],
      sector:['',[Validators.required]]
      
     
    })
  }
    addCompany(){
      this.companyService.saveCompany(this.addcompanyform.value).subscribe(data => {
        console.log('company Inserted Successfully');
      });
   
    }
    onSubmit(){
      console.log(this.addcompanyform.value);
  
    }
}
