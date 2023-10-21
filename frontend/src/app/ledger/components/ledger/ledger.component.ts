import {Component, Input, ViewChild} from '@angular/core';
import {Transaction} from '../../../shared/models/transaction.model';
import dinero, {Dinero} from 'dinero.js';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.less'],
})
export class LedgerComponent {
  @Input() transactions!: MatTableDataSource<Transaction>;
  displayColumns: string[] = ['date', 'transactionParty', 'category', 'amount'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.transactions.sort = this.sort;
    this.transactions.sortingDataAccessor = this.sortingDataAccessor;
    this.transactions.paginator = this.paginator;
  }

  sortingDataAccessor(data: Transaction, sortHeader: string): string | number {
    // I'm sure there's some TypeScript magic to be done here to avoid explicit any…
    const field: any = data[sortHeader as keyof Transaction];
    return (sortHeader === 'amount') ? field.toUnit() : field;
  }

  get totalAmount(): Dinero {
    return this.transactions.data.reduce((sum, transaction) => sum.add(transaction.amount), dinero({
      amount: 0,
      currency: 'USD'
    }));
  }

  sortData(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    const compare = (a: any, b: any) => (a < b ? -1 : 1) * (isAsc ? 1 : -1);

    const data = this.transactions.data.slice();
    console.table({sortActive: sort.active, isAsc});
    this.transactions.data = data.sort((a: any, b: any) => {
      switch (sort.active) {
        case 'amount':
          return compare(a.amount, b.amount);
        default:
          return compare(a, b);
      }
    });
  }
}
