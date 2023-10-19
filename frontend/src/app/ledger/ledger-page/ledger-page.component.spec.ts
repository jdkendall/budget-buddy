import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerPageComponent } from './ledger-page.component';

describe('LedgerPageComponent', () => {
  let component: LedgerPageComponent;
  let fixture: ComponentFixture<LedgerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LedgerPageComponent]
    });
    fixture = TestBed.createComponent(LedgerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
