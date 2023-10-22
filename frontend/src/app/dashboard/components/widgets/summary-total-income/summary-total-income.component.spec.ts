import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTotalIncomeComponent } from './summary-total-income.component';

describe('SummaryTotalIncomeComponent', () => {
  let component: SummaryTotalIncomeComponent;
  let fixture: ComponentFixture<SummaryTotalIncomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryTotalIncomeComponent]
    });
    fixture = TestBed.createComponent(SummaryTotalIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
