import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm!: FormGroup;
  isbn!: string;
  category!: string;
  message = '';
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => this.isbn = params['isbn']);

    // Create the form without the category field
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required], // Multiple authors separated by commas
      price: [0, [Validators.required, Validators.min(0)]],
      cover: ['', Validators.required],
      category: ['', Validators.required], // Category field is present but disabled
      isbn: ['', Validators.required] // ISBN field is present but disabled
    });

    // Load book data based on ISBN
    this.bookService.getBookByIsbn(this.isbn).subscribe((book) => {
      this.category = book.category;
      this.bookForm.setValue({
        title: book.title,
        author: book.author.join(', '),
        price: book.price,
        cover: book.cover,
        category: book.category, // Set category as value
        isbn: book.isbn // Set isbn as value
      });

      // Disable the category and isbn controls
      this.bookForm.get('category')?.disable();
      this.bookForm.get('isbn')?.disable();
    });
  }

  updateBook(): void {
    if (this.bookForm.invalid) {
      this.message = 'Please fill in all the fields correctly.';
      return;
    }

    // Set isSubmitting to true to indicate the form is being submitted
    this.isSubmitting = true;

    // Build the book object for the server
    const book = {
      isbn: this.isbn,
      title: this.bookForm.value.title,
      author: this.bookForm.value.author.split(',').map((a: string) => a.trim()), // Convert to array
      cover: this.bookForm.value.cover,
      price: this.bookForm.value.price
    };

    console.log('Data being sent for update:', book); // Log for verification

    // Send the update request
    this.bookService.updateBook(this.isbn, book).subscribe({
      next: () => {
        this.message = 'Book updated successfully!';
        this.isSubmitting = false; // Reset the submission flag
      },
      error: (err) => {
        console.error('Error updating book:', err);
        this.message = 'Error updating the book. Please check the data and try again.';
        this.isSubmitting = false; // Reset the submission flag
      }
    });
  }
}
