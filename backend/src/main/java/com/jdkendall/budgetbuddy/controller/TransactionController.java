package com.jdkendall.budgetbuddy.controller;

import com.jdkendall.budgetbuddy.dto.CreateTransactionRequest;
import com.jdkendall.budgetbuddy.dto.CreateTransactionResponse;
import com.jdkendall.budgetbuddy.dto.TransactionDto;
import com.jdkendall.budgetbuddy.dto.mapper.TransactionMapper;
import com.jdkendall.budgetbuddy.model.BBUser;
import com.jdkendall.budgetbuddy.model.Transaction;
import com.jdkendall.budgetbuddy.service.TransactionService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    private final TransactionMapper txMapper;

    public TransactionController(TransactionService transactionService, TransactionMapper txMapper) {
        this.transactionService = transactionService;
        this.txMapper = txMapper;
    }

    @GetMapping
    public ResponseEntity<List<TransactionDto>> getAllTransactions(BBUser user,
                                                                   @RequestParam LocalDate startDate,
                                                                   @RequestParam LocalDate endDate) {
        List<TransactionDto> transactions = transactionService.getAllTransactionsForUser(user.getId(), Optional.of(startDate), Optional.of(endDate))
                .stream()
                .map(this.txMapper::txToDTO)
                .collect(java.util.stream.Collectors.toList());
        return ResponseEntity.ok(transactions);
    }

    @PostMapping
    public ResponseEntity<CreateTransactionResponse> createTransaction(BBUser user,
                                                                       @RequestBody CreateTransactionRequest tx) {
        Transaction transaction = transactionService.addTransaction(user, tx);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(transaction.getId())
                .toUri();
        return ResponseEntity.created(location).body(new CreateTransactionResponse(transaction.getId()));
    }
}
