import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsRateComponent } from './savings-rate.component';

describe('SavingsRateComponent', () => {
  let component: SavingsRateComponent;
  let fixture: ComponentFixture<SavingsRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingsRateComponent]
    });
    fixture = TestBed.createComponent(SavingsRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
