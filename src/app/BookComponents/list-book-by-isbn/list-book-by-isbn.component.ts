import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-book-by-isbn',
  imports: [FormsModule, NgIf],
  templateUrl: './list-book-by-isbn.component.html',
  styleUrls: ['./list-book-by-isbn.component.css']
})
export class ListBookByISBNComponent implements OnInit {
  isbn: string = '';
  book: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Captura o valor do ISBN a partir da URL
    this.route.paramMap.subscribe(params => {
      this.isbn = params.get('isbn')!;
      this.getBook(); // Chama o método para buscar o livro após obter o ISBN
    });
  }

  getBook() {
    this.bookService.getBookByIsbn(this.isbn).subscribe(data => {
      this.book = data;
    });
  }
}
