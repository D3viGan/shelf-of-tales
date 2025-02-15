import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserAuth } from './Models/UserAuth';
import { AuthService } from './Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'shelf-of-tales';
  userSession: UserAuth | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => this.userSession = user);
  }

  logout(): void {
    this.authService.logout();
    this.userSession = null;
    this.router.navigate(['/']);
  }

  isClient(): boolean {
    return this.userSession?.role === 'client';
  }

  isManager(): boolean {
    return this.userSession?.role === 'manager';
  }

  isLoggedIn(): boolean {
    return this.userSession !== null;
  }

  isUser(): boolean {
    return this.isClient() || this.isManager();
  }

  clientFunction(): void {
    if (this.isClient()) {
      console.log('Executing client-specific function');
    }
  }

  managerFunction(): void {
    if (this.isManager()) {
      console.log('Executing manager-specific function');
    }
  }

  commonFunction(): void {
    if (this.isUser()) {
      console.log('Executing function available to both clients and managers');
    }
  }
}
