import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SummaryCurrentBalanceComponent} from './summary-current-balance.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('SummaryCurrentBalanceComponent', () => {
    let component: SummaryCurrentBalanceComponent;
    let fixture: ComponentFixture<SummaryCurrentBalanceComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [SummaryCurrentBalanceComponent]
        });
        fixture = TestBed.createComponent(SummaryCurrentBalanceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
