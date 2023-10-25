package com.jdkendall.budgetbuddy.dto;


import java.util.List;

public record BudgetOverviewDto(
        Dinero currentBalance,
        Dinero totalIncome,
        Dinero totalExpenditures,
        List<ExpenditureDto> topExpenditures,
        List<TransactionDto> recentTransactions) {
}
