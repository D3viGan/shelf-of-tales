import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { CategoryService } from '../../Services/category.service';
import { Category } from '../../Models/category';

@Component({
  selector: 'app-list-category',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  userRole: string | null = null;
  categories: Category[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.userRole = user?.role || null;
    });

    this.loadCategories();
  }

  isManager(): boolean {
    return this.userRole === 'manager';
  }

  loadCategories(): void {
    this.loading = true;
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
        this.errorMessage = 'Failed to load categories. Please try again later.';
        this.loading = false;
      }
    });
  }
}
