import { Component } from '@angular/core';
import {faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-debt-overview',
  templateUrl: './debt-overview.component.html',
  styleUrls: ['./debt-overview.component.less']
})
export class DebtOverviewComponent {
  readonly description: string = 'Provides a snapshot of outstanding debts and monthly commitments.';

  protected readonly faFileInvoiceDollar = faFileInvoiceDollar;
}
