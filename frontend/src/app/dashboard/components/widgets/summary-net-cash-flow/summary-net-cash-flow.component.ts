import { Component } from '@angular/core';
import {faExchangeAlt, faMoneyBillTransfer} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-summary-net-cash-flow',
  templateUrl: './summary-net-cash-flow.component.html',
  styleUrls: ['./summary-net-cash-flow.component.less']
})
export class SummaryNetCashFlowComponent {
  readonly description: string = 'Compares total income against total expenses, showing the difference.';

  protected readonly faMoneyBillTransfer = faMoneyBillTransfer;
}
