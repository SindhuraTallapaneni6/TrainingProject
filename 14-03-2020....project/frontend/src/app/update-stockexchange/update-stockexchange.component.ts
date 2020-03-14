import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockexchangeService } from '../Service/stockexchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stockexchange',
  templateUrl: './update-stockexchange.component.html',
  styleUrls: ['./update-stockexchange.component.css']
})
export class UpdateStockexchangeComponent implements OnInit {
  updateStock: FormGroup;

  constructor(private formBuilder: FormBuilder,private stockexchangeService: StockexchangeService, private router: Router) { }

  ngOnInit() {
    this.updateStock = this.formBuilder.group({
      id:['',[Validators.required]],
      exchangename:['',[Validators.required]],
      brief:['',[Validators.required]],
      contactaddress:['',[Validators.required]],
      remarks:['',[Validators.required]]

    });
    const id = localStorage.getItem('stockId');
    if(+id > 0){
      this.stockexchangeService.getStockById(+id).subscribe(stock => {
             this.updateStock.patchValue(stock);
      });
    }
  }
  updateTheStock(){
    this.stockexchangeService.updateStockInfo(this.updateStock.value).subscribe(u => {
      this.router.navigate(['stock']);
    });
  }
  onSubmit(){
    console.log(this.updateStock.value);
  }


}
