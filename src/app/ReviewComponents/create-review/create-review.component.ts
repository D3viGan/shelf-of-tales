import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../Services/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-review',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  isbn!: string; 
  reviewText: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private reviewService: ReviewService, 
    public router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isbn = this.route.snapshot.paramMap.get('isbn') || '';
  }

  submitReview(): void {
    if (!this.reviewText.trim()) {
      this.errorMessage = 'Review cannot be empty!';
      return;
    }

    const SendReview = {
      isbn: this.isbn,
      review: this.reviewText
    };

    console.log(SendReview);

    this.reviewService.createReview(SendReview).subscribe({
      next: () => {
        this.successMessage = 'Review submitted successfully!';
        this.errorMessage = null;
        setTimeout(() => {
          location.reload();
        }, 2000);
      },
      error: (err) => {
        console.error('Error submitting review:', err);
        this.errorMessage = 'Failed to submit review. Please try again.';
      }
    });
  }
}


