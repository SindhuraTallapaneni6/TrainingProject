import { Injectable, Inject } from '@angular/core';
import { StockExchange } from '../models/stockexchange';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockexchangeService {
  
  httpUrl=environment.port+'stock-exchange-service/stockexchange/';
  stockexchange:StockExchange[];

  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
  getAllStocks():Observable<StockExchange[]>
{
  return this.httpClient.get<StockExchange[]>(this.httpUrl);
}
saveStock(stockexchange :StockExchange):Observable<StockExchange>
{
  return this.httpClient.post<StockExchange>(this.httpUrl,stockexchange);
}
deleteStock(id: number): Observable<StockExchange>{
  return this.ht.delete(environment.port+`stock-exchange-service/stockexchange/${id}`);
}
updateStockInfo(stockexchange: StockExchange): Observable<StockExchange>{
 return this.ht.put(environment.port+`stock-exchange-service/stockexchange/`,stockexchange);
}
getStockById(id: number): Observable<StockExchange>{
return this.ht.get(environment.port+`stock-exchange-service/stockexchange/${id}`);
}
}


