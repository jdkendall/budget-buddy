import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UpcomingBillsComponent} from './upcoming-bills.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('UpcomingBillsComponent', () => {
    let component: UpcomingBillsComponent;
    let fixture: ComponentFixture<UpcomingBillsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [UpcomingBillsComponent]
        });
        fixture = TestBed.createComponent(UpcomingBillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
