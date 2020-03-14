import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from '../Service/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addipo',
  templateUrl: './addipo.component.html',
  styleUrls: ['./addipo.component.css']
})
export class AddipoComponent implements OnInit {
  addipoform: FormGroup;
  constructor(private formBuilder: FormBuilder, private ipoService: IpoService, private router: Router) { }

  ngOnInit() {
    this.addipoform = this.formBuilder.group({
      id: [],
      companyname: ['', Validators.required],
      opendatetime: ['', Validators.required],
      pricepershare: ['', Validators.required], 
      remarks:  ['',[Validators.required]],
      stockexchange: ['',[Validators.required]],
      totalstocks: ['',[Validators.required]]
      
    });

 }
 addIpo(){
  this.ipoService.saveIpo(this.addipoform.value).subscribe(data => {
    console.log('ipo details Inserted Successfully');
  });

}
onSubmit(){
  console.log(this.addipoform.value);

}
}
