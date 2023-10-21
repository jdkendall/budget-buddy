import {Component, EventEmitter, Input, Output} from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.less']
})
export class DateRangeFilterComponent {
  @Output() dateChanged: EventEmitter<DateChangeEvent> = new EventEmitter<DateChangeEvent>();

  endDate: Date = new Date();
  startDate: Date = new Date(new Date().setDate(this.endDate.getDate() - 30));

  onDateChanged() {
    this.dateChanged.emit({startDate: this.startDate, endDate: this.endDate});
  }
}

export interface DateChangeEvent {
    startDate: Date,
    endDate: Date
}
