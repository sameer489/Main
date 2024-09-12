import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPostComponent } from './booking-post.component';

describe('BookingPostComponent', () => {
  let component: BookingPostComponent;
  let fixture: ComponentFixture<BookingPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
