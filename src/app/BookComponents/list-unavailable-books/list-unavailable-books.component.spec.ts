import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUnavailableBooksComponent } from './list-unavailable-books.component';

describe('ListUnavailableBooksComponent', () => {
  let component: ListUnavailableBooksComponent;
  let fixture: ComponentFixture<ListUnavailableBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUnavailableBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUnavailableBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
