import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBookAvailabilityComponent } from './update-book-availability.component';

describe('UpdateBookAvailabilityComponent', () => {
  let component: UpdateBookAvailabilityComponent;
  let fixture: ComponentFixture<UpdateBookAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBookAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBookAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
