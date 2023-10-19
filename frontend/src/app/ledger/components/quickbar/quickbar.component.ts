import { Component } from '@angular/core';

@Component({
  selector: 'app-quickbar',
  templateUrl: './quickbar.component.html',
  styleUrls: ['./quickbar.component.less']
})
export class QuickbarComponent {
  amount: number | undefined;
  transactionParty: string | undefined;
  category: string | undefined;
  date: Date | undefined;
  categories = ["Rent", "Utilities", "Groceries", "Entertainment"];
  constructor() {}

  addEntry() {

  }
}
