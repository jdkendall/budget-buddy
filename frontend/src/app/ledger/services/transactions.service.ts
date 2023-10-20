import {environment} from '../../../environments/environment';
import {Transaction} from '../../shared/models/transaction.model';
import {Auth} from '@angular/fire/auth';
import {inject, Injectable} from '@angular/core';
import {UserService} from '../../shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  userService: UserService = inject(UserService);

  public async getTransactions(): Promise<Transaction[]> {
    // TODO: Retry logic
    const uid = await this.userService.getIdToken();
    const response = await fetch(`${environment.bbApi.url}/transactions`, {
      headers: {
        Authorization: `Bearer ${uid}`
      }
    });
    return await response.json() as Transaction[];
  }

  public async createTransaction(transaction: Transaction): Promise<Transaction> {
    // TODO: Retry logic with idempotency identifier
    const uid = await this.userService.getIdToken();
    const response = await fetch(`${environment.bbApi.url}/transactions`, {
          method: 'POST',
          body: JSON.stringify(transaction),
          headers: {
              Authorization: `Bearer ${uid}`,
              'Content-Type': 'application/json'
          }
      });
      return await response.json() as Transaction;
  }
}
