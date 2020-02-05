import { Injectable } from '@angular/core';
import { USERS } from '../models/user-mock';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    httpUrl='http://localhost:3438/users/';
    user1:User[];
  constructor(private httpClient: HttpClient) { }
  getAllUsers():Observable<User[]>
  {
    return this.httpClient.get<User[]>(this.httpUrl);
  }
  saveUser(user1 :User):Observable<User>
  {
    return this.httpClient.post<User>(this.httpUrl,user1);
  }
  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(this.httpUrl + id);
  }
  updateUserInfo(user1: User): Observable<User>{
   return this.httpClient.put<User>(this.httpUrl + user1.id,user1);
}
getUserById(id: number): Observable<User>{
  return this.httpClient.get<User>(this.httpUrl + id);
}
isAdmin(): boolean{
  return true;
 }

}
