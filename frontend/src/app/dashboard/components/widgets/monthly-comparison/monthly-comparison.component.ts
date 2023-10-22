import { Component } from '@angular/core';
import {faRightLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-monthly-comparison',
  templateUrl: './monthly-comparison.component.html',
  styleUrls: ['./monthly-comparison.component.less']
})
export class MonthlyComparisonComponent {
  readonly description: string = 'Compares financial performance between two consecutive months.';

  protected readonly faRightLeft = faRightLeft;
}
