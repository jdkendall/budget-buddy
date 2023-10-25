package com.jdkendall.budgetbuddy.repository;

import com.jdkendall.budgetbuddy.model.Expenditure;
import com.jdkendall.budgetbuddy.model.Transaction;
import com.jdkendall.budgetbuddy.model.projection.AggregateTransactionData;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(UUID userId);

    List<Transaction> findByUserIdAndDateAfter(UUID id, LocalDate localDate);

    List<Transaction> findByUserIdAndDateBefore(UUID id, LocalDate localDate);

    List<Transaction> findByUserIdAndDateBetween(UUID id, LocalDate start, LocalDate end);

    List<Transaction> findTop5ByUserIdOrderByDateDesc(UUID id);

    @Query("""
            SELECT
                SUM(CASE WHEN amount < 0 THEN amount ELSE 0 END) AS totalExpenditures,
                SUM(CASE WHEN amount > 0 THEN amount ELSE 0 END) AS totalIncome
            FROM Transaction WHERE userId = :uuid""")
    AggregateTransactionData getAggregateTxData(UUID uuid);

    @Query("""
            SELECT new com.jdkendall.budgetbuddy.model.Expenditure(category, SUM(amount))
            FROM Transaction
            WHERE userId = :userId
            GROUP BY category
            ORDER BY SUM(amount) DESC""")
    List<Expenditure> findTopExpenditures(UUID userId, Pageable pageable);

}
