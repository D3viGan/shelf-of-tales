import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../../Models/category';
import { CategoryService } from '../../Services/category.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  newCategory: Category = { name: '' };
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private categoryService: CategoryService, private router: Router) { }

  createCategory(): void {
    if (!this.newCategory.name.trim()) {
      this.errorMessage = 'Category name cannot be empty!';
      this.successMessage = null;
      return;
    }

    this.categoryService.createCategory(this.newCategory).subscribe({
      next: () => {
        this.successMessage = 'Category created successfully!';
        this.errorMessage = null;
        setTimeout(() => {
          this.navigateToCategories();
        }, 2000);
      },
      error: (err) => {
        console.error('Error creating category:', err);
        this.errorMessage = 'Error creating category. Please try again.';
      }
    });
  }

  navigateToCategories(): void {
    this.router.navigate(['/category']);
  }
}