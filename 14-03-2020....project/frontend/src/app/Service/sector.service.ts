import { Injectable, Inject } from '@angular/core';
import { Sector } from '../models/sector';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  httpUrl='http://localhost:8005/sector/';
  sector:Sector;

  constructor(private httpClient: HttpClient , @Inject (HttpClient) private ht) { }
  getAllSectors():Observable<Sector[]>
  {
    return this.httpClient.get<Sector[]>(this.httpUrl);
  }
  saveSector(sector1 :Sector)
  {
    return this.ht.post(this.httpUrl,sector1);
  }
  deleteSector(id: number): Observable<Sector>{
    return this.ht.delete(`http://localhost:8005/sector/${id}`);
  }
  updateSectorInfo(sector1: Sector): Observable<Sector>{
   return this.ht.put(this.httpUrl,sector1);
}
getSectorById(id: number): Observable<Sector>{
  return this.ht.get(`http://localhost:8005/sector/${id}`);
}

}
