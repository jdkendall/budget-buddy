package com.jdkendall.budgetbuddy.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotNull
    private LocalDate date;

    @NotNull
    private UUID userId;

    @ManyToOne
    @NotNull
    private TransactionParty transactionParty;

    @ManyToOne
    @NotNull
    private Category category;

    @NotNull
    private BigDecimal amount;
}
