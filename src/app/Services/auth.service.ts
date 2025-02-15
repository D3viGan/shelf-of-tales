import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { UserAuth } from '../Models/UserAuth';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = 'https://shelfoftales.onrender.com/api/user';
  private userSubject = new BehaviorSubject<UserAuth | null>(null);
  public user = this.userSubject.asObservable();
  
  constructor(private http: HttpClient, private tokenService: TokenService) {
    if (this.tokenService.hasToken('user')) {
      const storedUser: UserAuth = JSON.parse(this.tokenService.getToken('user'));
      this.userSubject.next(storedUser);
    }
  }

  signIn(email: string, password: string) {
    return this.http.post<UserAuth>(`${this.endpoint}/signin`, { email, password })
      .pipe(
        map(user => {
          if (!user.role) {
            user.role = 'user';
          }
          this.tokenService.saveToken('user', JSON.stringify(user));
          this.userSubject.next(user);
        }),
        catchError(this.handleError<UserAuth>('signin'))
      );
  }

  logout() {
    this.tokenService.deleteToken('user');
    this.userSubject.next(null);
  }

  hasToken() {
    return this.tokenService.hasToken('user');
  }

  getUserRole(): string {
    return this.userSubject.value?.role || 'user';
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.logout();
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return throwError(() => new Error(error.message));
    };
  }
}
