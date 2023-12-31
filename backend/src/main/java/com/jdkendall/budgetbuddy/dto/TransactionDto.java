package com.jdkendall.budgetbuddy.dto;

import org.springframework.lang.NonNull;

import java.time.LocalDate;

public record TransactionDto(@NonNull Dinero amount,
                             @NonNull String category,
                             @NonNull String transactionParty,
                             @NonNull LocalDate date) {
}
