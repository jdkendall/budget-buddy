import { Component } from '@angular/core';
import {faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary-total-income',
  templateUrl: './summary-total-income.component.html',
  styleUrls: ['./summary-total-income.component.less']
})
export class SummaryTotalIncomeComponent {
  readonly description: string = 'Summarizes your total earnings over a specified period.';

  protected readonly faArrowTrendUp = faArrowTrendUp;
}
