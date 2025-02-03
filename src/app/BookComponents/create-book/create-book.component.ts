import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  imports: [FormsModule, NgIf],
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  // Define the book object
  book = {
    isbn: '',
    title: '',
    author: '',
    category: '',
    cover: '',
    price: null,
    available: false
  };

  successMessage: string = '';
  errorMessage: string = '';

  createBook(form: any): void {
    if (form.valid) {
      // Perform book creation logic (e.g., call an API)
      this.successMessage = 'Book created successfully!';
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Please fill in all required fields.';
      this.successMessage = '';
    }
  }
}
