import firebase from 'firebase/compat';
import dinero, {Dinero} from 'dinero.js';
import {RawTransaction, refineTransaction, Transaction} from '../../shared/models/transaction.model';

export interface Category {
    name: string
}

export interface BudgetOverview {
    currentBalance: Dinero,
    totalIncome: Dinero,
    totalExpenditures: Dinero,
    topExpenditures: Expenditure[]
    recentTransactions: Transaction[]
}

export interface RawBudgetOverview {
    currentBalance: any,
    totalIncome: any,
    totalExpenditures: any,
    topExpenditures: RawExpenditure[]
    recentTransactions: RawTransaction[]
}

export interface Expenditure {
    category: Category,
    amount: Dinero
}

export interface RawExpenditure {
    category: Category,
    amount: any
}

export function refineRawBudgetOverview(raw: RawBudgetOverview) {
    return ({
        ...raw,
        currentBalance: dinero(raw.currentBalance),
        totalIncome: dinero(raw.totalIncome),
        totalExpenditures: dinero(raw.totalExpenditures),
        topExpenditures: raw.topExpenditures.map(refineExpenditure),
        recentTransactions: raw.recentTransactions.map(refineTransaction)
    });
}

export function refineExpenditure(raw: RawExpenditure) {
    return ({...raw, amount: dinero(raw.amount)});
}
