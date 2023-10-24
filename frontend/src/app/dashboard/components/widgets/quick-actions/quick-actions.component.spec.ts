import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuickActionsComponent} from './quick-actions.component';
import {DASHBOARD_PAGE_IMPORTS} from '../../../../../tests/shared-scaffolding.spec';

describe('QuickActionsComponent', () => {
    let component: QuickActionsComponent;
    let fixture: ComponentFixture<QuickActionsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...DASHBOARD_PAGE_IMPORTS],
            declarations: [QuickActionsComponent]
        });
        fixture = TestBed.createComponent(QuickActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
