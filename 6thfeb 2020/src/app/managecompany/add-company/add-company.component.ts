import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  addcompanyform : FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.addcompanyform=this.formBuilder.group({
      cid:['',[Validators.required]],
      cname:['',[Validators.required]],
      ceoname:['',[Validators.required]],
      bod:['',[Validators.required]],
      tover:['',[Validators.required]],
      sector:['',[Validators.required]],
      brief:['',[Validators.required]],
      scode:['',[Validators.required]]
     
    })
  }

}
