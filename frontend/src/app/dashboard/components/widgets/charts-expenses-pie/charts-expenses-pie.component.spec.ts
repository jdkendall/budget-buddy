import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChartsExpensesPieComponent} from './charts-expenses-pie.component';
import {PlotlyModule} from 'angular-plotly.js';

describe('ChartsExpensesPieComponent', () => {
    let component: ChartsExpensesPieComponent;
    let fixture: ComponentFixture<ChartsExpensesPieComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PlotlyModule],
            declarations: [ChartsExpensesPieComponent]
        });
        fixture = TestBed.createComponent(ChartsExpensesPieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
