import { Component, OnInit } from '@angular/core';
import { StockexchangeService } from '../Service/stockexchange.service';
import { Router } from '@angular/router';
import { StockExchange } from '../models/stockexchange';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor(private stockexchangeService: StockexchangeService, private router: Router) { }
  stockData: StockExchange[];
  ngOnInit() {
    this.stockexchangeService.getAllStocks().subscribe(data => {
      this.stockData = data;
  });
  }
  deleteStock(stockexchange : StockExchange){
    this.stockexchangeService.deleteStock(stockexchange.id).subscribe();
    this.stockData = this.stockData.filter(u => stockexchange != stockexchange);
  }
  updateStock(stockexchange : StockExchange){
    localStorage.removeItem('stockId');
    localStorage.setItem('stockId', stockexchange.id.toString());
    this.router.navigate(['update-stock']);
  }
  addStock(){
    this.router.navigate(['manageexchange']);
  }

}
