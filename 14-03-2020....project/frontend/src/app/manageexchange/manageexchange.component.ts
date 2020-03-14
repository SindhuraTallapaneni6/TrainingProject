import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockexchangeService } from '../Service/stockexchange.service';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {
  manageexchangeform: FormGroup;
  constructor(private formBuilder:FormBuilder, private stockexchangeService:StockexchangeService) { }

  ngOnInit() {
    this.manageexchangeform = this.formBuilder.group({
      id:['',[Validators.required]],
      exchangename:['',[Validators.required]],
      brief:['',[Validators.required]],
      contactaddress:['',[Validators.required]],
      remarks:['',[Validators.required]]

    })
  }
  manageExchange(){
    this.stockexchangeService.saveStock(this.manageexchangeform.value).subscribe(data => {
      console.log('stock Inserted Successfully');
     
    });
 }
 onSubmit(){

    console.log(this.manageexchangeform.value);

}

}
