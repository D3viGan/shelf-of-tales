import { Component} from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newUser: User = {
    name: "",
    email: "",
    password: ""
  }

  message: string = "";

  constructor(private userService: UserService, private router: Router) {}

  signUp() {
    this.userService.createUser(this.newUser).subscribe({
      next: (response) => {
        console.log('User created successfully:', response);
        alert('Sign up successful! Welcome to our platform.');
        setTimeout(() => {
          this.router.navigate(['/signin']);
        }, 2000);
      },
      error: (error) => {
        console.error('Error during sign up:', error);
        alert('Sign up failed. Please try again.');
      }
    });}

  resetNewUser() {
    this.newUser = {
      name: "",
      email: "",
      password: ""
    }
  }
}