import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ListBooksComponent } from "./BookComponents/list-all-books/list-books.component";
import { ListAvailableBooksComponent } from "./BookComponents/list-available-books/list-available-books.component";
import { ListUnavailableBooksComponent } from "./BookComponents/list-unavailable-books/list-unavailable-books.component";
import { UpdateBookAvailabilityComponent } from "./BookComponents/update-book-availability/update-book-availability.component";
import { DeleteBookComponent } from "./BookComponents/delete-book/delete-book.component";
import { CreateBookComponent } from "./BookComponents/create-book/create-book.component";
import { UpdateBookComponent } from "./BookComponents/update-book/update-book.component";
import { ListCategoryComponent } from "./CategoryComponents/list-category/list-category.component";
import { CreateCategoryComponent } from "./CategoryComponents/create-category/create-category.component";
import { ListReviewComponent } from "./ReviewComponents/list-review/list-review.component";
import { CreateReviewComponent } from "./ReviewComponents/create-review/create-review.component";
import { ListBookByISBNComponent } from "./BookComponents/list-book-by-isbn/list-book-by-isbn.component";
import { RoleGuard } from "./guards/role.guard";

export const routes: Routes = [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent },

    // Open Routes for Everyone
    { path: 'book/available', component: ListAvailableBooksComponent },
    { path: 'category', component: ListCategoryComponent },

    // Routes for Managers Only
    { path: 'book/unavailable', component: ListUnavailableBooksComponent, canActivate: [RoleGuard], data: { role: 'manager' } },
    { path: 'book/:isbn/availability', component: UpdateBookAvailabilityComponent, canActivate: [RoleGuard], data: { role: 'manager' } },
    { path: 'book/create', component: CreateBookComponent, canActivate: [RoleGuard], data: { role: 'manager' } },
    { path: 'book/delete', component: DeleteBookComponent, canActivate: [RoleGuard], data: { role: 'manager' } },
    { path: 'book/update/:isbn', component: UpdateBookComponent, canActivate: [RoleGuard], data: { role: 'manager' } },
    { path: 'category/create', component: CreateCategoryComponent, canActivate: [RoleGuard], data: { role: 'manager' } },

    // Routes for Authenticated Clients (Client & Manager)
    { path: 'book', component: ListBooksComponent, canActivate: [RoleGuard], data: { role: 'client' } },
    { path: 'book/:isbn', component: ListBookByISBNComponent, canActivate: [RoleGuard], data: { role: 'client' } },
    { path: 'review/:isbn', component: ListReviewComponent, canActivate: [RoleGuard], data: { role: 'client' } },
    { path: 'review/:isbn/create', component: CreateReviewComponent, canActivate: [RoleGuard], data: { role: 'client' } },
];