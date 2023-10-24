import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ChartsDailyLineComponent} from './charts-daily-line.component';
import {PlotlyModule} from 'angular-plotly.js';

describe('ChartsDailyLineComponent', () => {
    let component: ChartsDailyLineComponent;
    let fixture: ComponentFixture<ChartsDailyLineComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PlotlyModule],
            declarations: [ChartsDailyLineComponent]
        });
        fixture = TestBed.createComponent(ChartsDailyLineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
