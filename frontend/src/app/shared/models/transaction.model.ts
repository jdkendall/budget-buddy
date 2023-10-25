import dinero, {Dinero} from 'dinero.js';

export interface Transaction {
  id: number,
  date: string;
  transactionParty: string;
  category: string;
  amount: Dinero;
}

export interface RawTransaction {
  id: number,
  date: string;
  transactionParty: string;
  category: string;
  amount: any;
}

export function refineTransaction(raw: RawTransaction) {
  return {
    ...raw,
    amount: dinero(raw.amount)
  }
}
