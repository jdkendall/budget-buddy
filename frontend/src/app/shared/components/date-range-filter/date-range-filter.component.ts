import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-date-range-filter',
  templateUrl: './date-range-filter.component.html',
  styleUrls: ['./date-range-filter.component.less']
})
export class DateRangeFilterComponent {
  @Output() dateChanged: EventEmitter<DateChangeEvent> = new EventEmitter<DateChangeEvent>();

  endDate: Date = new Date();
  startDate: Date = new Date(new Date().setDate(this.endDate.getDate() - 30));

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
  startDate: Date,
  endDate: Date
}
