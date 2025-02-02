import { Component } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Models/book';


@Component({
  selector: 'app-create-book',
  imports: [],
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  book: Book = {
    isbn: '',
    title: '',
    author: [],
    category: '',
    cover: '',
    price: 0,
    available: true
  };

  constructor(private bookService: BookService) {}

  createBook() {
    // Converte a string de autores para um array
    if (typeof this.book.author === 'string') {
      this.book.author = this.book.author.split(',').map(a => a.trim());
    }

    this.bookService.createBook(this.book).subscribe(() => {
      alert('Livro criado com sucesso!');
      this.resetForm();
    });
  }

  resetForm() {
    this.book = {
      isbn: '',
      title: '',
      author: [],
      category: '',
      cover: '',
      price: 0,
      available: true
    };
  }
}
