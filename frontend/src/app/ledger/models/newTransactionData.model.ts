import {Dinero} from 'dinero.js';

export interface NewTransactionData {
  date: Date,
  category: string,
  transactionParty: string,
  amount: Dinero
}
