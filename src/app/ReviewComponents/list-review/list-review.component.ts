import { Component } from '@angular/core';
import { GetReview } from '../../Models/get-review';
import { ReviewService } from '../../Services/review.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listreview',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './list-review.component.html',
  styleUrl: './list-review.component.css'
})
export class ListreviewComponent {
  isbn!: string;
  reviews: GetReview[] = [];
  errorMessage: string | null = null;

  constructor(private reviewService: ReviewService, public route: ActivatedRoute) { }

  ngOnInit(): void { this.route.params.subscribe(params => this.isbn=params['isbn'])
    if (this.isbn) {
      this.loadReviews();
    }
  }

  loadReviews(): void {
    this.reviewService.getAllReviews(this.isbn).subscribe({
      next: (data) => {
        this.reviews = data;
      },
      error: (err) => {
        console.error('Error fetching reviews:', err);
        this.errorMessage = 'Unable to load reviews.';
      }
    });
  }
}