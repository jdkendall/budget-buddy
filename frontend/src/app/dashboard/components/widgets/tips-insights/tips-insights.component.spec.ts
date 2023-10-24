import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TipsInsightsComponent} from './tips-insights.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('TipsInsightsComponent', () => {
    let component: TipsInsightsComponent;
    let fixture: ComponentFixture<TipsInsightsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [TipsInsightsComponent]
        });
        fixture = TestBed.createComponent(TipsInsightsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
