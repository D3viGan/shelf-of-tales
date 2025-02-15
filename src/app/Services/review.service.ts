import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostReview } from '../Models/PostReview';
import { GetReview } from '../Models/getReview';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private theEndPoint = 'https://shelfoftales.onrender.com/api/review';

  constructor(private http: HttpClient) { }

  createReview(newReview: PostReview): Observable<any> {
    return this.http.post<any>(this.theEndPoint, newReview);
  }

  getAllReviews(isbn: string): Observable<GetReview[]> {
    return this.http.get<GetReview[]>(`${this.theEndPoint}/${isbn}`);
  }
}
