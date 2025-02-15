import { Component, OnInit } from '@angular/core';
import { Category } from '../../Models/category';
import { CategoryService } from '../../Services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-category',
  imports: [CommonModule],
  templateUrl: './list-category.component.html',
  styleUrl: './list-category.component.css'
})
export class ListCategoryComponent implements OnInit{
  categories: Category[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load categories';
        this.loading = false;
      }
    });
  }
}
