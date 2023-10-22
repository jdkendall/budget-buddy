import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryNetCashFlowComponent } from './summary-net-cash-flow.component';

describe('SummaryNetCashFlowComponent', () => {
  let component: SummaryNetCashFlowComponent;
  let fixture: ComponentFixture<SummaryNetCashFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryNetCashFlowComponent]
    });
    fixture = TestBed.createComponent(SummaryNetCashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
