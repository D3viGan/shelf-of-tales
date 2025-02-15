import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'https://shelfoftales.onrender.com/api/book';

  constructor(private http: HttpClient) {}

  createBook(book: Book): Observable<any> {
    return this.http.post<any>(`${this.API_URL}`, book);
  }

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}`);
  }

  getAvailableBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/available`);
  }

  getUnavailableBooks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/unavailable`);
  }

  getBookByIsbn(isbn: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${isbn}`);
  }

  deleteBook(isbn: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${isbn}`);
  }

  updateBook(isbn: string, book: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${isbn}`, book);
  }

  updateBookAvailability(isbn: string, availability: boolean): Observable<any> {
    return this.http.patch(`${this.API_URL}/${isbn}/availability`, { availability });
  }
}