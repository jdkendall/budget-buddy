import {Component, Input, ViewChild} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction.model';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import dinero, {Dinero} from 'dinero.js';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.less']
})
export class LedgerComponent {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @Input() transactions: Transaction[] = [];

  endDate: Date = new Date();
  // TODO: Use a better date library
  startDate: Date = new Date(new Date().setDate(this.endDate.getDate() - 30));

  get totalAmount(): Dinero {
    return this.transactions.reduce((sum, transaction) => sum.add(transaction.amount), dinero({ amount: 0, currency: "USD"}));
  }

  getAlternatingColors(row: any) {
    const currentRow: any = this;
    const idx = currentRow.rowIndex;
    return {'alternate-color': idx % 2 === 1};
  }

  dineroToNumber(value: Dinero) {
    return value.toUnit();
  }
}
