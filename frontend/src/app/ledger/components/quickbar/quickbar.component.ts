import {Component, EventEmitter, Output} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction.model';
import dinero from 'dinero.js';

@Component({
  selector: 'app-quickbar',
  templateUrl: './quickbar.component.html',
  styleUrls: ['./quickbar.component.less']
})
export class QuickbarComponent {
  @Output() addTransaction = new EventEmitter<Transaction>();

  amount: number | undefined;
  transactionParty: string | undefined;
  category: string | undefined;
  date: Date | undefined;
  categories = ['Rent', 'Utilities', 'Groceries', 'Entertainment'];

  constructor() {
  }

  addEntry() {
    // Cheat: time is monotonically increasing, so we're guaranteed
    // (within reason) a unique temporary ID value if we go negative
    const id = Date.now() * -1;
    if (!this.date || !this.amount || !this.category || !this.transactionParty) {
      throw new Error('No');
    }

    const newTx: Transaction = {
      date: this.date,
      amount: dinero({amount: Math.floor(this.amount * 100), currency: 'USD'}),
      transactionParty: this.transactionParty,
      category: this.category,
      id
    };

    this.addTransaction.emit(newTx);
  }

}
