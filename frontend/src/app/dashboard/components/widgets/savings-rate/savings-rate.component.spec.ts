import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SavingsRateComponent} from './savings-rate.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('SavingsRateComponent', () => {
    let component: SavingsRateComponent;
    let fixture: ComponentFixture<SavingsRateComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [SavingsRateComponent]
        });
        fixture = TestBed.createComponent(SavingsRateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
