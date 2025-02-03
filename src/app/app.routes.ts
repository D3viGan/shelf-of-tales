import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ListBooksComponent } from "./BookComponents/list-all-books/list-books.component";
import { ListAvailableBooksComponent } from "./BookComponents/list-available-books/list-available-books.component";
import { ListUnavailableBooksComponent } from "./BookComponents/list-unavailable-books/list-unavailable-books.component";
import { ListBookByISBNComponent } from "./BookComponents/list-book-by-isbn/list-book-by-isbn.component";
import { UpdateBookComponent } from "./BookComponents/update-book-availability/update-book-availability.component";
import { DeleteBookComponent } from "./BookComponents/delete-book/delete-book.component";

export const routes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'book', component: ListBooksComponent },
    { path: 'book/available', component: ListAvailableBooksComponent },
    { path: 'book/unavailable', component: ListUnavailableBooksComponent },
    { path: 'book/:isbn', component: ListBookByISBNComponent },
    { path: 'book/:isbn/availability', component: UpdateBookComponent },
    { path: 'delete', component: DeleteBookComponent },
];