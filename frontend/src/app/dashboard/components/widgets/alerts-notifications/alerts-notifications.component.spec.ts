import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlertsNotificationsComponent} from './alerts-notifications.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('AlertsNotificationsComponent', () => {
    let component: AlertsNotificationsComponent;
    let fixture: ComponentFixture<AlertsNotificationsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
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
