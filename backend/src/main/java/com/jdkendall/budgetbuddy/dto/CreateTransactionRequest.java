package com.jdkendall.budgetbuddy.dto;

import org.springframework.lang.NonNull;

import java.time.LocalDate;

// TODO: double is the wrong type for financial amounts. BigDecimal would be better. Need to review how
//  Dinero.js values would propagate in JSON and convert to appropriate type.
public record CreateTransactionRequest(@NonNull double amount,
                                       @NonNull String category,
                                       @NonNull String transactionParty,
                                       @NonNull LocalDate date) {}
