import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SavingsGoalsComponent} from './savings-goals.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('SavingsGoalsComponent', () => {
    let component: SavingsGoalsComponent;
    let fixture: ComponentFixture<SavingsGoalsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [SavingsGoalsComponent]
        });
        fixture = TestBed.createComponent(SavingsGoalsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
