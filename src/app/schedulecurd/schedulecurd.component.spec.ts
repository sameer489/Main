import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulecurdComponent } from './schedulecurd.component';

describe('SchedulecurdComponent', () => {
  let component: SchedulecurdComponent;
  let fixture: ComponentFixture<SchedulecurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SchedulecurdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulecurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
