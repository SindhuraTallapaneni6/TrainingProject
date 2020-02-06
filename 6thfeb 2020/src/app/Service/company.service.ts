import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  httpUrl='http://localhost:3439/company/';
    company1:Company[];
  constructor(private httpClient: HttpClient) { }
  getAllUsers():Observable<Company[]>
  {
    return this.httpClient.get<Company[]>(this.httpUrl);
  }
  saveUser(company1 :Company):Observable<Company>
  {
    return this.httpClient.post<Company>(this.httpUrl,company1);
  }
  deleteUser(id: number): Observable<Company>{
    return this.httpClient.delete<Company>(this.httpUrl + id);
  }
  updateUserInfo(company1: Company): Observable<Company>{
   return this.httpClient.put<Company>(this.httpUrl + company1.cid,company1);
}
getUserById(id: number): Observable<Company>{
  return this.httpClient.get<Company>(this.httpUrl + id);
}
}
