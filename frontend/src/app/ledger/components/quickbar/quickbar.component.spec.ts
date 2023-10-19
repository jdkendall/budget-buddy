import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickbarComponent } from './quickbar.component';

describe('QuickbarComponent', () => {
  let component: QuickbarComponent;
  let fixture: ComponentFixture<QuickbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickbarComponent]
    });
    fixture = TestBed.createComponent(QuickbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
