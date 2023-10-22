import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsMonthlyBarComponent } from './charts-monthly-bar.component';

describe('ChartsMonthlyBarComponent', () => {
  let component: ChartsMonthlyBarComponent;
  let fixture: ComponentFixture<ChartsMonthlyBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsMonthlyBarComponent]
    });
    fixture = TestBed.createComponent(ChartsMonthlyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
