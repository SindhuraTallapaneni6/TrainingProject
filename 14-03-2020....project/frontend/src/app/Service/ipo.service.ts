import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipo } from '../models/ipo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

  httpUrl=environment.port+'initial-public-offering-service/ipo/';
  ipo:Ipo[];
constructor(private httpClient: HttpClient, @Inject (HttpClient) private ht) { }
getAllIpos():Observable<Ipo[]>
{
  return this.httpClient.get<Ipo[]>(this.httpUrl);
}
saveIpo(ipo :Ipo):Observable<Ipo>
{
  return this.httpClient.post<Ipo>(this.httpUrl,ipo);
}
deleteIpo(id: number): Observable<Ipo>{
  return this.ht.delete(environment.port+`initial-public-offering-service/ipo/${id}`);
}
updateIpoInfo(ipo: Ipo): Observable<Ipo>{
 return this.ht.put(environment.port+`initial-public-offering-service/ipo/`,ipo);
}
getIpoById(id: number): Observable<Ipo>{
return this.ht.get(environment.port+`initial-public-offering-service/ipo/${id}`);
}
}
