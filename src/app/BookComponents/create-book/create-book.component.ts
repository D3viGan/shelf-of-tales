import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Models/book';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-book',
  imports: [FormsModule, NgIf],
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  book: Book = {
    isbn: '',
    title: '',
    author: '',
    category: '',
    cover: '',
    price: 0,
    available: true
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private bookService: BookService) {}

  createBook(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.bookService.createBook(this.book).subscribe(
      (response) => {
        this.successMessage = 'Book created successfully!';
        this.errorMessage = '';
        form.reset();
      },
      (error) => {
        this.errorMessage = 'Error creating book. Please try again.';
        this.successMessage = '';
      }
    );
  }
}