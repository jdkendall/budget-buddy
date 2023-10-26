import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LedgerPageComponent} from './ledger-page.component';
import {TransactionsService} from '../../services/transactions.service';
import {
    DateChangeEvent,
    DateRangeFilterComponent
} from '../../../shared/components/date-range-filter/date-range-filter.component';
import {Transaction} from '../../../shared/models/transaction.model';
import {of, throwError} from 'rxjs';
import {LEDGER_PAGE_IMPORTS} from '../../../../tests/shared-scaffolding.spec';
import {LedgerComponent} from '../ledger/ledger.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable} from '@angular/material/table';
import dinero from 'dinero.js';
import {QuickbarComponent} from '../quickbar/quickbar.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

// Mock TransactionsService
class MockTransactionsService {
    getTransactions: jasmine.Spy<jasmine.Func> = jasmine.createSpy('getTransactions').and.returnValue(of([]));
    createTransaction: jasmine.Spy<jasmine.Func> = jasmine.createSpy('createTransaction').and.returnValue(of({}));
}

describe('LedgerPageComponent', () => {
    let component: LedgerPageComponent;
    let fixture: ComponentFixture<LedgerPageComponent>;
    let transactionsService: TransactionsService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LedgerPageComponent, LedgerComponent, DateRangeFilterComponent, QuickbarComponent, MatPaginator, MatTable],
            imports: [...LEDGER_PAGE_IMPORTS],
            providers: [
                {provide: TransactionsService, useClass: MockTransactionsService}
            ],
            schemas: [NO_ERRORS_SCHEMA] // to ignore child components not declared
        })
            .compileComponents();

        transactionsService = TestBed.inject(TransactionsService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LedgerPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('getTransactions', () => {
        it('should load transactions', () => {
            component.getTransactions();
            expect(transactionsService.getTransactions).toHaveBeenCalled();
            expect(component.isLoading).toBeFalse();
        });

        it('should handle error', () => {
            (transactionsService.getTransactions as jasmine.Spy).and.returnValue(throwError(() => 'Error'));
            component.getTransactions();
            expect(component.isLoading).toBeFalse();
            // Add more assertions to handle error scenarios
        });
    });

    describe('addTransaction', () => {
        it('should add a transaction and update UI', () => {
            const newTx: Transaction = {
                id: -1,
                transactionParty: 'Bob',
                amount: dinero({
                    amount: 10,
                    currency: 'USD'
                }),
                date: '2022-01-01',
                category: 'Fast Food'
            };
            component.addTransaction(newTx);
            expect(transactionsService.createTransaction).toHaveBeenCalledWith(newTx);
            // Add more assertions related to optimistic update
        });

        it('should handle error while adding transaction', () => {
            (transactionsService.createTransaction as jasmine.Spy).and.returnValue(throwError(() => 'Error'));
            const newTx: Transaction = {
                id: -1,
                transactionParty: 'Bob',
                amount: dinero({
                    amount: 10,
                    currency: 'USD'
                }),
                date: '2022-01-01',
                category: 'Fast Food'
            };
            component.addTransaction(newTx);
            expect(component.transactions.data).not.toContain(newTx);
        });
    });

    describe('onDateRangeChanged', () => {
        it('should load transactions for the given date range', () => {
            const dateEvent: DateChangeEvent = {startDate: '2023-10-15', endDate: '2023-11-15'};
            component.onDateRangeChanged(dateEvent);
            expect(transactionsService.getTransactions).toHaveBeenCalledWith(new Date(dateEvent.startDate), new Date(dateEvent.endDate));
            expect(component.isLoading).toBeFalse();
        });
    });
});
