import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailableBooksComponent } from './list-available-books.component';

describe('ListAvailableBooksComponent', () => {
  let component: ListAvailableBooksComponent;
  let fixture: ComponentFixture<ListAvailableBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAvailableBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAvailableBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
