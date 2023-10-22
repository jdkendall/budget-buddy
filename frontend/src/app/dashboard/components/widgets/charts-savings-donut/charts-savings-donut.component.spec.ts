import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsSavingsDonutComponent } from './charts-savings-donut.component';

describe('ChartsSavingsDonutComponent', () => {
  let component: ChartsSavingsDonutComponent;
  let fixture: ComponentFixture<ChartsSavingsDonutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsSavingsDonutComponent]
    });
    fixture = TestBed.createComponent(ChartsSavingsDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
