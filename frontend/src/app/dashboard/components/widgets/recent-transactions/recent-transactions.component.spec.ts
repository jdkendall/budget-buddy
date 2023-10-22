import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentTransactionsComponent } from './recent-transactions.component';

describe('RecentTransactionsComponent', () => {
  let component: RecentTransactionsComponent;
  let fixture: ComponentFixture<RecentTransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentTransactionsComponent]
    });
    fixture = TestBed.createComponent(RecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
