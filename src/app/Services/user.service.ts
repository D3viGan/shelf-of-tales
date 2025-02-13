import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly theEndPoint = "https://shelfoftales.onrender.com/api/user"

  constructor(private myWebApiClient: HttpClient) { 
  }

  // Create new user
  createUser(newUser: User): Observable<any> {
    return this.myWebApiClient.post<any>(`${this.theEndPoint}/signup`, newUser); // POST Request to create a user
  }
}
