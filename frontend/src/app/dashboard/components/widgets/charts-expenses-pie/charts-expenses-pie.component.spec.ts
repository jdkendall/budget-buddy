import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChartsExpensesPieComponent} from './charts-expenses-pie.component';
import {PlotlyModule} from 'angular-plotly.js';
import {UserService} from '../../../../shared/services/user.service';
import {MockUserService} from '../../../../../tests/shared-mocks.spec';
import {COMMON_IMPORTS, COMMON_PROVIDERS} from '../../../../../tests/shared-scaffolding.spec';

describe('ChartsExpensesPieComponent', () => {
    let component: ChartsExpensesPieComponent;
    let fixture: ComponentFixture<ChartsExpensesPieComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [...COMMON_IMPORTS, PlotlyModule],
            declarations: [ChartsExpensesPieComponent],
            providers: [...COMMON_PROVIDERS,
                {provide: UserService, useValue: new MockUserService()},
            ]
        });
        fixture = TestBed.createComponent(ChartsExpensesPieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
