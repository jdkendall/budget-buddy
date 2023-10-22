import { Component } from '@angular/core';
import {faPiggyBank} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-savings-goals',
  templateUrl: './savings-goals.component.html',
  styleUrls: ['./savings-goals.component.less']
})
export class SavingsGoalsComponent {
  readonly description: string = 'Tracks progress towards specific financial saving targets.';

  protected readonly faPiggyBank = faPiggyBank;
}
