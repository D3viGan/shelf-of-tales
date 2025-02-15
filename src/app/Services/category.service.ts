import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private theEndPoint = 'https://shelfoftales.onrender.com/api/bookcategory';

  constructor(private http: HttpClient) { }

  createCategory(newCategory: Category): Observable<any> {
    return this.http.post<any>(this.theEndPoint, newCategory);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.theEndPoint);
  }
}
