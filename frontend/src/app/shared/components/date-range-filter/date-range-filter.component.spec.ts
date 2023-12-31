import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DateRangeFilterComponent} from './date-range-filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('DateRangeFilterComponent', () => {
    let component: DateRangeFilterComponent;
    let fixture: ComponentFixture<DateRangeFilterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [DateRangeFilterComponent]
        });
        fixture = TestBed.createComponent(DateRangeFilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
