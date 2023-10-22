import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsGoalsComponent } from './savings-goals.component';

describe('SavingsGoalsComponent', () => {
  let component: SavingsGoalsComponent;
  let fixture: ComponentFixture<SavingsGoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingsGoalsComponent]
    });
    fixture = TestBed.createComponent(SavingsGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
