import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SummaryNetCashFlowComponent} from './summary-net-cash-flow.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('SummaryNetCashFlowComponent', () => {
    let component: SummaryNetCashFlowComponent;
    let fixture: ComponentFixture<SummaryNetCashFlowComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [SummaryNetCashFlowComponent]
        });
        fixture = TestBed.createComponent(SummaryNetCashFlowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
