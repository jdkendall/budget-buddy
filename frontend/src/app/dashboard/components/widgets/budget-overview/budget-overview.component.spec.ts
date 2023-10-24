import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BudgetOverviewComponent} from './budget-overview.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('BudgetOverviewComponent', () => {
    let component: BudgetOverviewComponent;
    let fixture: ComponentFixture<BudgetOverviewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [BudgetOverviewComponent]
        });
        fixture = TestBed.createComponent(BudgetOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
