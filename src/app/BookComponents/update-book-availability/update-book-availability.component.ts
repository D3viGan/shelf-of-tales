import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../Services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  imports: [FormsModule],
  templateUrl: './update-book-availability.component.html',
  styleUrls: ['./update-book-availability.component.css']
})
export class UpdateBookComponent implements OnInit {
  isbn: string = '';
  available: boolean = false;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Captura o ISBN da URL
    this.route.paramMap.subscribe(params => {
      this.isbn = params.get('isbn')!;
    });
  }

  updateBookAvailability() {
    // Chama o serviço para atualizar a disponibilidade
    this.bookService.updateBookAvailability(this.isbn, this.available).subscribe(
      () => {
        alert('Book availability successfully updated!');
      },
      (error) => {
        alert('Failed to update book availability');
      }
    );
  }
}