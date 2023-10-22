import { Component } from '@angular/core';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upcoming-bills',
  templateUrl: './upcoming-bills.component.html',
  styleUrls: ['./upcoming-bills.component.less']
})
export class UpcomingBillsComponent {
  readonly description: string = 'Lists pending bills and their due dates.';

  protected readonly faCalendarAlt = faCalendarAlt;
}
