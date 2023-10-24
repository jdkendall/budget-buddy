import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CashFlowForecastComponent} from './cash-flow-forecast.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('CashFlowForecastComponent', () => {
    let component: CashFlowForecastComponent;
    let fixture: ComponentFixture<CashFlowForecastComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [CashFlowForecastComponent]
        });
        fixture = TestBed.createComponent(CashFlowForecastComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
