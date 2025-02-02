import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookByISBNComponent } from './list-book-by-isbn.component';

describe('ListBookByISBNComponent', () => {
  let component: ListBookByISBNComponent;
  let fixture: ComponentFixture<ListBookByISBNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBookByISBNComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBookByISBNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
