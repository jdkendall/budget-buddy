package com.jdkendall.budgetbuddy.service;

import com.jdkendall.budgetbuddy.model.BBUser;
import com.jdkendall.budgetbuddy.model.BudgetOverview;
import com.jdkendall.budgetbuddy.model.Expenditure;
import com.jdkendall.budgetbuddy.model.Transaction;
import com.jdkendall.budgetbuddy.model.projection.AggregateTransactionData;
import com.jdkendall.budgetbuddy.repository.TransactionRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.concurrent.CompletableFuture;

@Service
public class BudgetService {
    final TransactionRepository txRepository;

    public BudgetService(TransactionRepository txRepository) {
        this.txRepository = txRepository;
    }

    public CompletableFuture<BudgetOverview> getOverview(BBUser user) {
        CompletableFuture<AggregateTransactionData> aggregateTxDataF = CompletableFuture.supplyAsync(() -> this.txRepository.getAggregateTxData(user.getId()));
        CompletableFuture<List<Expenditure>> top5ExpendituresF = CompletableFuture.supplyAsync(() -> this.txRepository.findTopExpenditures(user.getId(), Pageable.ofSize(5)));
        CompletableFuture<List<Transaction>> recentTransactionsF = CompletableFuture.supplyAsync(() -> this.txRepository.findTop5ByUserIdOrderByDateDesc(user.getId()));


        return CompletableFuture.allOf()
                .thenApply(v -> {
                    var aggregateTxData = aggregateTxDataF.join();

                    // Extract more results as needed
                    BigDecimal totalIncome = aggregateTxData.getTotalIncome();
                    BigDecimal totalExpenditures = aggregateTxData.getTotalExpenditures();
                    BigDecimal currentBalance = totalIncome.add(totalExpenditures);

                    return new BudgetOverview(
                            currentBalance,
                            totalIncome,
                            totalExpenditures,
                            top5ExpendituresF.join(),
                            recentTransactionsF.join());
                });
    }
}
