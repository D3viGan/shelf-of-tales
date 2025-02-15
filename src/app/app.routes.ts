import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ListBooksComponent } from "./BookComponents/list-all-books/list-books.component";
import { ListAvailableBooksComponent } from "./BookComponents/list-available-books/list-available-books.component";
import { ListUnavailableBooksComponent } from "./BookComponents/list-unavailable-books/list-unavailable-books.component";
import { ListBookByISBNComponent } from "./BookComponents/list-book-by-isbn/list-book-by-isbn.component";
import { UpdateBookAvailabilityComponent } from "./BookComponents/update-book-availability/update-book-availability.component";
import { DeleteBookComponent } from "./BookComponents/delete-book/delete-book.component";
import { CreateBookComponent } from "./BookComponents/create-book/create-book.component";
import { UpdateBookComponent } from "./BookComponents/update-book/update-book.component";
import { ListCategoryComponent } from "./CategoryComponents/list-category/list-category.component";
import { CreateCategoryComponent } from "./CategoryComponents/create-category/create-category.component";
import { ListReviewComponent } from "./ReviewComponents/list-review/list-review.component";

export const routes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent },
    { path: 'book', component: ListBooksComponent },
    { path: 'book/available', component: ListAvailableBooksComponent },
    { path: 'book/unavailable', component: ListUnavailableBooksComponent },
    { path: 'book/:isbn/availability', component: UpdateBookAvailabilityComponent },
    { path: 'book/create', component: CreateBookComponent },
    { path: 'book/:isbn', component: ListBookByISBNComponent },
    { path: 'delete', component: DeleteBookComponent },
    { path: 'update/:isbn', component: UpdateBookComponent },
    { path: 'category', component: ListCategoryComponent },
    { path: 'category/create', component: CreateCategoryComponent },
    { path: 'review/:isbn', component: ListReviewComponent}
];