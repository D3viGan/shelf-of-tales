import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';
import { PageLoadService } from '../Services/page-load.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {
  email?: string;
  password?: string;
  message?: string;
  isVisible: boolean = false;
  isSignedIn: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private loaderService: PageLoadService
  ) {}

  signIn() {
    this.loaderService.showLoader();
    this.authService.signIn(this.email!, this.password!).subscribe({
      next: () => {
        this.loaderService.hideLoader();
        this.isSignedIn = true;
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.loaderService.hideLoader();
        this.message = "Failed to Sign in.";
      }
    });
  }

  ngOnInit(): void {
    this.loaderService.isLoading().subscribe({
      next: (x) => this.isVisible = x,
      error: (err) => console.error(err)
    });
  }
}
