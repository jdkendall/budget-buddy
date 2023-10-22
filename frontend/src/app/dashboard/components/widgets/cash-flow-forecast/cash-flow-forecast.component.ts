import { Component } from '@angular/core';
import {faBell, faSearchDollar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cash-flow-forecast',
  templateUrl: './cash-flow-forecast.component.html',
  styleUrls: ['./cash-flow-forecast.component.less']
})
export class CashFlowForecastComponent {
  readonly description: string = 'Provides a prediction of future income and expenses based on historical data.';
  protected readonly faSearchDollar = faSearchDollar;
}
