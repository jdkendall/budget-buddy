import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryCurrentBalanceComponent } from './summary-current-balance.component';

describe('SummaryCurrentBalanceComponent', () => {
  let component: SummaryCurrentBalanceComponent;
  let fixture: ComponentFixture<SummaryCurrentBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryCurrentBalanceComponent]
    });
    fixture = TestBed.createComponent(SummaryCurrentBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
