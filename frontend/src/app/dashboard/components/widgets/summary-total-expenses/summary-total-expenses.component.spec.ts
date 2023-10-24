import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SummaryTotalExpensesComponent} from './summary-total-expenses.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('SummaryTotalExpensesComponent', () => {
    let component: SummaryTotalExpensesComponent;
    let fixture: ComponentFixture<SummaryTotalExpensesComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [SummaryTotalExpensesComponent]
        });
        fixture = TestBed.createComponent(SummaryTotalExpensesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
