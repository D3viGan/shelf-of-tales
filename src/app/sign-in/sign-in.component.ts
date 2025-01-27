import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  email?: string;
  password?: string;
  message?: string;

  isVisible: boolean = false;

  constructor(private authService: AuthService, private router: Router, private loaderService: PageLoadService) {

  }

}
