import {Component, inject, OnInit} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction.model';
import {TransactionsService} from '../../services/transactions.service';
import {DateChangeEvent} from '../../../shared/components/date-range-filter/date-range-filter.component';
import moment from 'moment';
import {MatTableDataSource, MatTableDataSourcePaginator} from '@angular/material/table';

@Component({
  selector: 'app-ledger-page',
  templateUrl: './ledger-page.component.html',
  styleUrls: ['./ledger-page.component.less']
})
export class LedgerPageComponent implements OnInit {
  isLoading: boolean = true;
  transactions: MatTableDataSource<Transaction> = new MatTableDataSource();
  transactionsService: TransactionsService = inject(TransactionsService);

    ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionsService.getTransactions(moment().subtract(30, "days").toDate(), moment().toDate()).subscribe({
        next: (data: Transaction[]) => {
          this.transactions.data = data;
          this.isLoading = false;
        },
        error: (error: unknown) => console.log(error)
      }
    )

  }

  addTransaction(newTx: Transaction) {

    // Optimistically update the UI
    this.transactions.data = [...this.transactions.data, newTx];

    // Bodge to make mat-table re-sort
    var sort = this.transactions.sort;
    this.transactions.sort = null;
    this.transactions.sort = sort;

    // Send the data to the server
    this.transactionsService.createTransaction(newTx).subscribe(
      {
        next: addedTx => {
          // Replace the temporary product with the one from the server
          const index = this.transactions.data.findIndex(p => p.id === newTx.id);
          this.transactions.data[index].id = addedTx.id;
        },
        error: error => {
          console.error('Error adding transaction', error);
          // Rollback the optimistic update
          this.transactions.data = this.transactions.data.filter(p => p.id !== newTx.id);
        }
      }
    );
  }

  onDateRangeChanged($event: DateChangeEvent) {
    this.isLoading = true;
    this.transactionsService.getTransactions($event.startDate, $event.endDate).subscribe({
      next: (data: Transaction[]) => {
        this.transactions.data = data;
        this.isLoading = false;
      }
    });
  }
}
