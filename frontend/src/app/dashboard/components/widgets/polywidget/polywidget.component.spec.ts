import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolywidgetComponent } from './polywidget.component';

describe('PolywidgetComponent', () => {
  let component: PolywidgetComponent;
  let fixture: ComponentFixture<PolywidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolywidgetComponent]
    });
    fixture = TestBed.createComponent(PolywidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
