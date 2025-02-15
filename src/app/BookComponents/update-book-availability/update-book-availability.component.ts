import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule],
  templateUrl: './update-book-availability.component.html',
  styleUrls: ['./update-book-availability.component.css']
})
export class UpdateBookAvailabilityComponent implements OnInit {
  isbn: string = '';
  available: boolean = false;
  bookExists: boolean = true;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Captures ISBN from URL
    this.route.paramMap.subscribe(params => {
      this.isbn = params.get('isbn')!;
      this.checkIfBookExists(this.isbn);
    });
  }

  checkIfBookExists(isbn: string) {
    this.bookService.getBookByIsbn(isbn).subscribe(
      (book) => {
        this.bookExists = true;
      },
      (error) => {
        this.bookExists = false;
        alert('Book not found!');
      }
    );
  }

  updateBookAvailability() {
    if (!this.bookExists) {
      alert('Book not found, cannot update availability.');
      return;
    }

    this.bookService.updateBookAvailability(this.isbn, this.available).subscribe(
      () => {
        alert('Book availability successfully updated!');
      },
      (error) => {
        alert('Failed to update book availability');
      }
    );
  }
}
