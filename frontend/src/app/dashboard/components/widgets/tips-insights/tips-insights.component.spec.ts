import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsInsightsComponent } from './tips-insights.component';

describe('TipsInsightsComponent', () => {
  let component: TipsInsightsComponent;
  let fixture: ComponentFixture<TipsInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipsInsightsComponent]
    });
    fixture = TestBed.createComponent(TipsInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
