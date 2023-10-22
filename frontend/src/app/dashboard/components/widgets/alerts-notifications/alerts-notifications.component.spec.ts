import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsNotificationsComponent } from './alerts-notifications.component';

describe('AlertsNotificationsComponent', () => {
  let component: AlertsNotificationsComponent;
  let fixture: ComponentFixture<AlertsNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertsNotificationsComponent]
    });
    fixture = TestBed.createComponent(AlertsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
