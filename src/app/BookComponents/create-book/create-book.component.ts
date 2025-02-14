import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Models/book';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-create-book',
  standalone: true,
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
  imports: [FormsModule,NgFor,CommonModule],
})

export class CreateBookComponent {
  newBook: Book = {
    isbn: '',
    title: '',
    author: [], // Initialize as an empty array
    category: '',
    cover: '',
    price: 0,
    available: true
  };

  newAuthor: string = ''; // For inputting new authors

  constructor(private bookService: BookService, private router: Router) { }

  // Method to add a new author
  addAuthor(): void {
    if (this.newAuthor.trim() !== '') {
      this.newBook.author.push(this.newAuthor.trim());
      this.newAuthor = ''; // Clear the input field
    } else {
      alert('Author name cannot be empty!');
    }
  }

  // Method to remove an author by index
  removeAuthor(index: number): void {
    this.newBook.author.splice(index, 1);
  }

  // Method to create the book
  createBook(): void {
    this.bookService.createBook(this.newBook).subscribe({
      next: () => {
        alert('Livro criado com sucesso!');
        this.router.navigate(['/book']); // Redirect to the book list
      },
      error: (err) => {
        console.error('Erro ao criar o livro:', err);
        alert('Erro ao criar o livro. Verifique os dados e tente novamente.');
      }
    });
  }
}