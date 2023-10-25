import {environment} from '../../../environments/environment';
import {RawTransaction, refineTransaction, Transaction} from '../../shared/models/transaction.model';
import {inject, Injectable} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {catchError, map, Observable, switchMap, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {CreateTransactionResponse} from '../models/CreateTransactionResponse.model';
import dinero from 'dinero.js';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  userService: UserService = inject(UserService);

  constructor(private http: HttpClient) {
  }

  public getTransactions(startDate: Date, endDate: Date): Observable<Transaction[]> {
    // TODO: Retry logic
    return this.userService.getIdToken()
      .pipe(
        switchMap(token => this.getTransactionsApiCall(startDate, endDate, token))
      ).pipe(catchError(this.handleError));
  }


  public createTransaction(transaction: Transaction): Observable<CreateTransactionResponse> {
    // TODO: Retry logic with idempotency identifier
    return this.userService.getIdToken()
      .pipe(
        switchMap(token => this.createTransactionApiCall(token, transaction))
      )
      .pipe(catchError(this.handleError));
  }

  private getTransactionsApiCall(startDate: Date, endDate: Date, token: string | null): Observable<Transaction[]> {
    if (!token) {
      // If the token is null or undefined, throw an error
      return throwError(() => 'Token is absent. User might not be authenticated.');
    }

    return this.http.get<RawTransaction[]>(`${environment.bbApi.url}/transactions`, {
      params: {
          startDate: moment(startDate).format("YYYY-MM-DD"),
          endDate: moment(endDate).format("YYYY-MM-DD")
        },
      headers: {Authorization: `Bearer ${token}`}
    }).pipe(
      map(txs => txs.map(refineTransaction)));
  }

  private createTransactionApiCall(token: string | null, transaction: Transaction): Observable<CreateTransactionResponse> {
    if (!token) {
      // If the token is null or undefined, throw an error
      return throwError(() => 'Token is absent. User might not be authenticated.');
    }

    return this.http.post<CreateTransactionResponse>(`${environment.bbApi.url}/transactions`, {
      ...transaction,
      date: moment(transaction.date).format("YYYY-MM-DD"),
      amount: transaction.amount.toUnit()
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
