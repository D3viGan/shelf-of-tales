import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-books',
  imports: [CommonModule, RouterLink],
  templateUrl: './list-books.component.html',
  styleUrl: './list-books.component.css'
})

export class ListBooksComponent implements OnInit {
  books: any[] = [];
isLoading: any;
errorMessage: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }
}
