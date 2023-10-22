import { Component } from '@angular/core';
import {faBell, faCoins} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-budget-overview',
  templateUrl: './budget-overview.component.html',
  styleUrls: ['./budget-overview.component.less']
})
export class BudgetOverviewComponent {
  readonly description: string = 'Compares the allocated budget against actual spending for various categories.';

  protected readonly faBell = faBell;
  protected readonly faCoins = faCoins;
}
