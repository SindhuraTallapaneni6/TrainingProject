import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from 'src/app/Service/ipo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-ipo-details',
  templateUrl: './update-ipo-details.component.html',
  styleUrls: ['./update-ipo-details.component.css']
})
export class UpdateIPODetailsComponent implements OnInit {

  updateIpo : FormGroup;
  constructor(private formBuilder: FormBuilder, private ipoService: IpoService, private router: Router) { }

  

  ngOnInit() {
    this.updateIpo = this.formBuilder.group({
      id: [],
      companyname: ['', Validators.required],
      opendatetime: ['', Validators.required],
      pricepershare: ['', Validators.required], 
      remarks:  ['',[Validators.required]],
      stockexchange: ['',[Validators.required]],
      totalstocks: ['',[Validators.required]]
      
    });
  
  const id = localStorage.getItem('ipoId');
    if(+id > 0){
      this.ipoService.getIpoById(+id).subscribe(ipo => {
             this.updateIpo.patchValue(ipo);
      });
    }
  }
  updateTheIpo(){
    this.ipoService.updateIpoInfo(this.updateIpo.value).subscribe(u => {
      this.router.navigate(['ipo']);
    });
  }
  onSubmit(){
    console.log(this.updateIpo.value);
  }


}
