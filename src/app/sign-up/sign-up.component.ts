import { Component, NgModule } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  constructor(private userService: UserService) {}

  signUp(): void {
    this.userService.createUser(this.newUser).subscribe(result => {
      this.message = result;
      console.log(this.message);
    });
  }

  resetNewUser() {
    this.newUser = {
      name: "",
      email: "",
      password: ""
    }
  }
}
