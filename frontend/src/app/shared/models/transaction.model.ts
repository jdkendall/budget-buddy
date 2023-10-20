import {Dinero} from 'dinero.js';

export interface Transaction {
  id: number,
  date: Date;
  transactionParty: string;
  category: string;
  amount: Dinero;
}
