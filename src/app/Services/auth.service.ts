import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = 'https://shelfoftales.onrender.com/api/user';
  private userSubject = new BehaviorSubject<User | null>(null);
  public user!: Observable<User | null>;
  
  constructor(private http: HttpClient, private tokenService: TokenService) {
    if(this.tokenService.hasToken('user')){
      this.userSubject.next(JSON.parse(this.tokenService.getToken('user')) );
    }
  }

  signIn(email: string, password: string){
    return this.http.post<any>(`${this.endpoint}/signin`, { email, password })
    .pipe(
      map(user=>this.tokenService.saveToken('user', JSON.stringify(user))),
      catchError(this.handleError<User>("signin"))
    );
  }

  logout() {
     this.tokenService.deleteToken('user');
  }

  hasToken() {
    return this.tokenService.hasToken('user');
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      this.logout();
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return throwError(() => new Error(error.message))
;    }
  }
}
