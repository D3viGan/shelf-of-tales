import { Component } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  imports: [FormsModule],
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  isbn: string = '';

  constructor(private bookService: BookService) {}

  deleteBook() {
    this.bookService.deleteBook(this.isbn).subscribe(() => {
      alert('Book successfully removed!');
    });
  }
}