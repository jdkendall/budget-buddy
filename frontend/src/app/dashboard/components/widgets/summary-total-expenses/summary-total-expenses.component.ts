import { Component } from '@angular/core';
import {faArrowTrendDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary-total-expenses',
  templateUrl: './summary-total-expenses.component.html',
  styleUrls: ['./summary-total-expenses.component.less']
})
export class SummaryTotalExpensesComponent {
  readonly description: string = 'Highlights the total amount spent during a specific time frame.';

  protected readonly faArrowTrendDown = faArrowTrendDown;
}
