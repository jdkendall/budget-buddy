import { Component } from '@angular/core';
import {faLineChart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-savings-rate',
  templateUrl: './savings-rate.component.html',
  styleUrls: ['./savings-rate.component.less']
})
export class SavingsRateComponent {
  readonly description: string = 'Indicates the percentage of income saved versus income earned.';

  protected readonly faLineChart = faLineChart;
}
