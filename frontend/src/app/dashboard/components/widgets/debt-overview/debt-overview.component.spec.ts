import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DebtOverviewComponent} from './debt-overview.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('DebtOverviewComponent', () => {
    let component: DebtOverviewComponent;
    let fixture: ComponentFixture<DebtOverviewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
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
