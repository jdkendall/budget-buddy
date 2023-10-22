import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingBillsComponent } from './upcoming-bills.component';

describe('UpcomingBillsComponent', () => {
  let component: UpcomingBillsComponent;
  let fixture: ComponentFixture<UpcomingBillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingBillsComponent]
    });
    fixture = TestBed.createComponent(UpcomingBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
