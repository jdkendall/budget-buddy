import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MonthlyComparisonComponent} from './monthly-comparison.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('MonthlyComparisonComponent', () => {
    let component: MonthlyComparisonComponent;
    let fixture: ComponentFixture<MonthlyComparisonComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [MonthlyComparisonComponent]
        });
        fixture = TestBed.createComponent(MonthlyComparisonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
