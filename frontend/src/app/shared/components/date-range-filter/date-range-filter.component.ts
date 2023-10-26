import {Component, EventEmitter, Output} from '@angular/core';
import moment from 'moment/moment';

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.less']
})
export class DateRangeFilterComponent {
  @Output() dateChanged: EventEmitter<DateChangeEvent> = new EventEmitter<DateChangeEvent>();

  endDate: string = moment().format("YYYY-MM-DD");
  startDate: string = moment().subtract(30, "days").format("YYYY-MM-DD");

  onDateChanged(target: 'startDate' | 'endDate', $event: any) {
    if (target == 'startDate') {
      this.startDate = $event;
    } else if (target == 'endDate') {
      this.endDate = $event;
    }

    this.dateChanged.emit({startDate: this.startDate, endDate: this.endDate});
  }
}

export interface DateChangeEvent {
  startDate: string,
  endDate: string
}
