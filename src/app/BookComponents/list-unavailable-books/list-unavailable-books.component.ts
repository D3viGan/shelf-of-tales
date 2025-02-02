import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-unavailable-books',
  imports: [NgFor, NgIf],
  templateUrl: './list-unavailable-books.component.html',
  styleUrls: ['./list-unavailable-books.component.css']
})
export class ListUnavailableBooksComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getUnavailableBooks().subscribe(data => {
      this.books = data;
    });
  }
}