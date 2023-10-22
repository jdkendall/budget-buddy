import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowForecastComponent } from './cash-flow-forecast.component';

describe('CashFlowForecastComponent', () => {
  let component: CashFlowForecastComponent;
  let fixture: ComponentFixture<CashFlowForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashFlowForecastComponent]
    });
    fixture = TestBed.createComponent(CashFlowForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
