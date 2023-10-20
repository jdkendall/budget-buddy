import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction.model';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {TransactionsService} from '../../services/transactions.service';
import {Auth} from '@angular/fire/auth';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.less']
})
export class LedgerComponent implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  auth: Auth = inject(Auth);
  transactionsService: TransactionsService = inject(TransactionsService);

  endDate: Date = new Date();
  // TODO: Use a better date library
  startDate: Date = new Date(new Date().setDate(this.endDate.getDate() - 30));

  transactions: Transaction[] = [];
  isLoading: boolean = true;

  get totalAmount(): number {
    return this.transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  async ngOnInit() {
    this.transactions = await this.transactionsService.getTransactions();
    this.isLoading = false;
  }

  getAlternatingColors(row: any) {
    const currentRow: any = this;
    console.log(currentRow);
    const idx = currentRow.rowIndex;
    return {'alternate-color': idx % 2 === 1};
  }
}
