import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, switchMap, throwError} from 'rxjs';
import {BudgetOverview, RawBudgetOverview, refineRawBudgetOverview} from '../models/budget-overview';
import {UserService} from '../../shared/services/user.service';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BudgetService {
    userService: UserService = inject(UserService);
    http: HttpClient = inject(HttpClient);

    private budgetOverview$: BehaviorSubject<BudgetOverview | null> = new BehaviorSubject<BudgetOverview | null>(null);

    getBudgetOverview(): Observable<BudgetOverview | null> {
        return this.budgetOverview$.asObservable();
    }

    refreshBudgetOverview() {
        this.userService.getIdToken()
            .pipe(
                switchMap(token => this.getBudgetOverviewApiCall(token)),
                map<RawBudgetOverview, BudgetOverview>(refineRawBudgetOverview)
            ).pipe(catchError(this.handleError)).subscribe(data => this.budgetOverview$.next(data));
    }

    private getBudgetOverviewApiCall(token: string | null): Observable<RawBudgetOverview> {
        if (!token) {
            // If the token is null or undefined, throw an error
            return throwError(() => 'Token is absent. User might not be authenticated.');
        }

        return this.http.get<RawBudgetOverview>(`${environment.bbApi.url}/budget`, {
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
