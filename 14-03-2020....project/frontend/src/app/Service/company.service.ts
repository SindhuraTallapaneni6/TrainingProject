import { Injectable, Inject } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpUrl=environment.port+'company-service/company/';
    company1:Company[];
  constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
  getAllCompanies():Observable<Company[]>
  {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  saveCompany(company1 :Company):Observable<Company>
  {
    return this.httpClient.post<Company>(this.httpUrl,company1);
  }
  deleteCompany(id: number): Observable<Company>{
    return this.ht.delete(environment.port+`company-service/company/${id}`);
  }
  updateCompanyInfo(company1: Company): Observable<Company>{
   return this.ht.put(environment.port+`company-service/company/`,company1);
}
getCompanyById(id: number): Observable<Company>{
  return this.ht.get(environment.port+`company-service/company/${id}`);
}
}
