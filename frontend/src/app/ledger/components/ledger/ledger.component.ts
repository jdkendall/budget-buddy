import {Component, ViewChild} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction.model';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {DataTableBodyComponent} from '@swimlane/ngx-datatable/lib/components/body/body.component';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.less']
})
export class LedgerComponent {
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  endDate: Date = new Date();
  // TODO: Use a better date library
  startDate: Date = new Date(new Date().setDate(this.endDate.getDate() - 30));

  transactions: Transaction[] = [
    // Sample data
    { date: new Date(Date.parse('Aug 19, 2023')), transactionParty: 'John Doe', category: 'Groceries', amount: 50.00 },
    { date: new Date(Date.parse('Aug 18, 2023')), transactionParty: 'Jane Smith', category: 'Rent', amount: 1000.00 },
    // ... other transactions
  ];

  get totalAmount(): number {
    return this.transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  getAlternatingColors(row: any) {
    const currentRow: any = this;
    console.log(currentRow);
    const idx = currentRow.rowIndex;
    return {'alternate-color': idx % 2 === 1 };
  }
}
