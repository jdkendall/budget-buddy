import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsDailyLineComponent } from './charts-daily-line.component';

describe('ChartsDailyLineComponent', () => {
  let component: ChartsDailyLineComponent;
  let fixture: ComponentFixture<ChartsDailyLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsDailyLineComponent]
    });
    fixture = TestBed.createComponent(ChartsDailyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
