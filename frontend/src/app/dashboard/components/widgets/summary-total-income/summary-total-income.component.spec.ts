import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SummaryTotalIncomeComponent} from './summary-total-income.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('SummaryTotalIncomeComponent', () => {
    let component: SummaryTotalIncomeComponent;
    let fixture: ComponentFixture<SummaryTotalIncomeComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [SummaryTotalIncomeComponent]
        });
        fixture = TestBed.createComponent(SummaryTotalIncomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
