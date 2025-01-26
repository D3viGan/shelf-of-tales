import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = 'http://vsrvform01.dei.isep.ipp.pt/api/user';
  private userSubject = new BehaviorSubject<User | null>(null);
  public user!: Observable<User | null>;
  
  constructor() {
  }
}
