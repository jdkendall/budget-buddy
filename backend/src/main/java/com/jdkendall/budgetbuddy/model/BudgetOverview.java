package com.jdkendall.budgetbuddy.model;

import java.math.BigDecimal;
import java.util.List;

public record BudgetOverview(
        BigDecimal currentBalance,
        BigDecimal totalIncome,
        BigDecimal totalExpenditures,
        List<Expenditure> topExpenditures,
        List<Transaction> recentTransactions) {
}
