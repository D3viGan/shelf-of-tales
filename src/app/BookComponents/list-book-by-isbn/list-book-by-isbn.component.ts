import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { AuthService } from '../../Services/auth.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-book-by-isbn',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './list-book-by-isbn.component.html',
  styleUrls: ['./list-book-by-isbn.component.css']
})
export class ListBookByISBNComponent implements OnInit {
  isbn: string = '';
  book: any;
  userRole: string | null = null;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.isbn = params.get('isbn')!;
      this.getBook();
    });

    this.userRole = this.authService.getUserRole();
  }

  getBook() {
    this.bookService.getBookByIsbn(this.isbn).subscribe(data => {
      this.book = data;
    });
  }

  isManager(): boolean {
    return this.userRole === 'manager';
  }

  isClient(): boolean {
    return this.userRole === 'client';
  }

  updateBook() {
    this.router.navigate([`book/update/${this.isbn}`]);
  }

  removeBook() {
    if (confirm('Are you sure you want to remove this book?')) {
      this.bookService.deleteBook(this.isbn).subscribe(() => {
        alert('Book removed successfully');
        this.router.navigate(['/book']); // Redirect after removal
      });
    }
  }

  toggleAvailability() {
    this.book.available = !this.book.available;
    this.bookService.updateBookAvailability(this.isbn, this.book).subscribe(() => {
      alert(`Book availability changed to: ${this.book.available ? 'Available' : 'Unavailable'}`);
    });
  }

  getReviewes() {
    this.router.navigate([`review/${this.isbn}`]);
  }

  postReview() {
    this.router.navigate([`review/${this.isbn}/create`]);
  }
}
