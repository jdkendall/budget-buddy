package com.jdkendall.budgetbuddy.repository;

import com.jdkendall.budgetbuddy.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByUserId(UUID userId);

    List<Transaction> findByUserIdAndDateAfter(UUID id, LocalDate localDate);

    List<Transaction> findByUserIdAndDateBefore(UUID id, LocalDate localDate);

    List<Transaction> findByUserIdAndDateBetween(UUID id, LocalDate start, LocalDate end);
}
