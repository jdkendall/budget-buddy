import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtOverviewComponent } from './debt-overview.component';

describe('DebtOverviewComponent', () => {
  let component: DebtOverviewComponent;
  let fixture: ComponentFixture<DebtOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebtOverviewComponent]
    });
    fixture = TestBed.createComponent(DebtOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
