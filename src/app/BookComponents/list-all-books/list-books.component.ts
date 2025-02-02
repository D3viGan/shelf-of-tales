import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-list-books',
  imports: [CommonModule],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})

export class ListBooksComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }
}
