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
  bookExists: boolean = true; // Flag to track if the book exists

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Captura o ISBN da URL
    this.route.paramMap.subscribe(params => {
      this.isbn = params.get('isbn')!;
      this.checkIfBookExists(this.isbn);  // Check if the book exists when the component initializes
    });
  }

  // Method to check if the book exists
  checkIfBookExists(isbn: string) {
    this.bookService.getBookByIsbn(isbn).subscribe(
      (book) => {
        // If a book is returned, the book exists
        this.bookExists = true;
      },
      (error) => {
        // If an error occurs (book not found), set bookExists to false
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

    // Chama o serviço para atualizar a disponibilidade
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
