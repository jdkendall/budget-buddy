import {Component} from '@angular/core';
import {faReceipt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.less']
})
export class RecentTransactionsComponent {
  readonly description: string = 'Lists the most recent financial activities, both income and expenses.';

  protected readonly faReceipt = faReceipt;
}
