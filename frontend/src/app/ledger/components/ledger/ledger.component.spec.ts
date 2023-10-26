import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LedgerComponent} from './ledger.component';
import {Transaction} from '../../../shared/models/transaction.model';
import dinero from 'dinero.js';
import {MatTableDataSource} from '@angular/material/table';
import {LEDGER_PAGE_IMPORTS} from '../../../../tests/shared-scaffolding.spec';

describe('LedgerComponent', () => {
    let component: LedgerComponent;
    let fixture: ComponentFixture<LedgerComponent>;
    const mockTransactions: Transaction[] = [
        {id: 1, date: '2022-01-01', transactionParty: 'Party A', category: 'Food', amount: dinero({amount: 1000, currency: 'USD'})},
        {id: 2, date: '2022-01-02', transactionParty: 'Party B', category: 'Entertainment', amount: dinero({amount: 2000, currency: 'USD'})}
    ];

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LedgerComponent],
            imports: [...LEDGER_PAGE_IMPORTS]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LedgerComponent);
        component = fixture.componentInstance;
        component.transactions = new MatTableDataSource(mockTransactions);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngAfterViewInit', () => {
        it('should assign sort and paginator to transactions', () => {
            component.ngAfterViewInit();
            expect(component.transactions.sort).toBeDefined();
            expect(component.transactions.paginator).toBeDefined();
            expect(component.transactions.sortingDataAccessor).toEqual(component.sortingDataAccessor);
        });
    });

    describe('sortingDataAccessor', () => {
        it('should return amount in unit for sortHeader "amount"', () => {
            const tx: Transaction = mockTransactions[0];
            expect(component.sortingDataAccessor(tx, 'amount')).toEqual(tx.amount.toUnit());
        });

        it('should return field value for other sortHeaders', () => {
            const tx: Transaction = mockTransactions[0];
            expect(component.sortingDataAccessor(tx, 'date')).toEqual(tx.date);
            expect(component.sortingDataAccessor(tx, 'transactionParty')).toEqual(tx.transactionParty);
            expect(component.sortingDataAccessor(tx, 'category')).toEqual(tx.category);
        });
    });

    describe('totalAmount', () => {
        it('should return the total amount', () => {
            const total = mockTransactions.reduce((sum, tx) => sum.add(tx.amount), dinero({amount: 0, currency: 'USD'}));
            expect(component.totalAmount.getAmount()).toEqual(total.getAmount());
        });
    });

    describe('sortData', () => {
        it('should sort data based on amount', () => {
            component.sortData({active: 'amount', direction: 'asc'});
            expect(component.transactions.data[0].amount.getAmount()).toBeLessThan(component.transactions.data[1].amount.getAmount());
        });

        it('should sort data based on other fields', () => {
            component.sortData({active: 'date', direction: 'asc'});
            expect(new Date(component.transactions.data[0].date).getTime()).toBeLessThan(new Date(component.transactions.data[1].date).getTime());
        });
    });
});
