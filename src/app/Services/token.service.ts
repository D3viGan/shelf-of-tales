import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  saveToken(key: string, token: string) {
    localStorage.setItem(key, token);
  }

  deleteToken(key:string) {
    localStorage.removeItem(key);
  }

  getToken(key:string): string {
    return localStorage.getItem(key) ?? '';
  }

  hasToken(key:string) {
    if(typeof localStorage == 'undefined') return false;
    return !!this.getToken(key);
  }

  getRole(key:string) {
    if(this.getToken(key)!='') {
      return JSON.parse(this.getToken(key)).role;
    }
  }
}
