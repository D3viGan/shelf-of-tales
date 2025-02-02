import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-available-books',
  imports: [NgFor],
  templateUrl: './list-available-books.component.html',
  styleUrls: ['./list-available-books.component.css']
})
export class ListAvailableBooksComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAvailableBooks().subscribe(data => {
      this.books = data;
    });
  }
}