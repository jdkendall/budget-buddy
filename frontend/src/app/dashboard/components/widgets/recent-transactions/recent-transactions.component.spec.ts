import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecentTransactionsComponent} from './recent-transactions.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('RecentTransactionsComponent', () => {
    let component: RecentTransactionsComponent;
    let fixture: ComponentFixture<RecentTransactionsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [RecentTransactionsComponent]
        });
        fixture = TestBed.createComponent(RecentTransactionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
