import {Component, inject, OnInit} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction.model';
import {TransactionsService} from '../../services/transactions.service';

@Component({
  selector: 'app-ledger-page',
  templateUrl: './ledger-page.component.html',
  styleUrls: ['./ledger-page.component.less']
})
export class LedgerPageComponent implements OnInit {
  isLoading: boolean = true;
  transactions: Transaction[] = [];
  transactionsService: TransactionsService = inject(TransactionsService);

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionsService.getTransactions().subscribe({
        next: (data: Transaction[]) => {
          this.transactions = data;
          this.isLoading = false;
        },
        error: (error: unknown) => console.log(error)
      }
    )

  }

  addTransaction(newTx: Transaction) {

    // Optimistically update the UI
    this.transactions = [...this.transactions, newTx];

    // Send the data to the server
    this.transactionsService.createTransaction(newTx).subscribe(
      {
        next: addedTx => {
          // Replace the temporary product with the one from the server
          const index = this.transactions.findIndex(p => p.id === newTx.id);
          this.transactions[index].id = addedTx.id;
        },
        error: error => {
          console.error('Error adding transaction', error);
          // Rollback the optimistic update
          this.transactions = this.transactions.filter(p => p.id !== newTx.id);
        }
      }
    );
  }
}
