import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTotalExpensesComponent } from './summary-total-expenses.component';

describe('SummaryTotalExpensesComponent', () => {
  let component: SummaryTotalExpensesComponent;
  let fixture: ComponentFixture<SummaryTotalExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryTotalExpensesComponent]
    });
    fixture = TestBed.createComponent(SummaryTotalExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
