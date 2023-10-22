import { Component } from '@angular/core';
import {faWallet} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary-current-balance',
  templateUrl: './summary-current-balance.component.html',
  styleUrls: ['./summary-current-balance.component.less']
})
export class SummaryCurrentBalanceComponent {
  readonly description: string = 'Displays your available funds at the current moment.'
  protected readonly faWallet = faWallet;
}
