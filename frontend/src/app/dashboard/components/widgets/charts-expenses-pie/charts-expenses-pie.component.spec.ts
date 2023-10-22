import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsExpensesPieComponent } from './charts-expenses-pie.component';

describe('ChartsExpensesPieComponent', () => {
  let component: ChartsExpensesPieComponent;
  let fixture: ComponentFixture<ChartsExpensesPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsExpensesPieComponent]
    });
    fixture = TestBed.createComponent(ChartsExpensesPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
