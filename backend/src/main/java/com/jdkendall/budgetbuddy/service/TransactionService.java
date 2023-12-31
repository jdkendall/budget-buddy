package com.jdkendall.budgetbuddy.service;

import com.jdkendall.budgetbuddy.dto.CreateTransactionRequest;
import com.jdkendall.budgetbuddy.model.BBUser;
import com.jdkendall.budgetbuddy.model.Category;
import com.jdkendall.budgetbuddy.model.Transaction;
import com.jdkendall.budgetbuddy.model.TransactionParty;
import com.jdkendall.budgetbuddy.repository.CategoryRepository;
import com.jdkendall.budgetbuddy.repository.TransactionPartyRepository;
import com.jdkendall.budgetbuddy.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final CategoryRepository categoryRepository;
    private final TransactionPartyRepository txPartyRepository;

    public TransactionService(TransactionRepository transactionRepository, CategoryRepository categoryRepository, TransactionPartyRepository txPartyRepository) {
        this.transactionRepository = transactionRepository;
        this.categoryRepository = categoryRepository;
        this.txPartyRepository = txPartyRepository;
    }

    @Deprecated
    public List<Transaction> getAllTransactionsForUser(UUID id) {
        return this.getAllTransactionsForUser(id, Optional.empty(), Optional.empty());
    }

    public List<Transaction> getAllTransactionsForUser(UUID id, Optional<LocalDate> startDate, Optional<LocalDate> endDate) {
        boolean beforeEnd = startDate.isEmpty() && endDate.isPresent();
        boolean afterStart = startDate.isPresent() && endDate.isEmpty();
        boolean betweenDates = startDate.isPresent() && endDate.isPresent();

        if(afterStart) return transactionRepository.findByUserIdAndDateAfter(id, startDate.get());
        if(beforeEnd) return transactionRepository.findByUserIdAndDateBefore(id, endDate.get());
        if(betweenDates) return transactionRepository.findByUserIdAndDateBetween(id, startDate.get(), endDate.get());

        // No dates, pull all records
        return transactionRepository.findByUserId(id);
    }

    public Transaction addTransaction(BBUser user, CreateTransactionRequest request) {
        // Check if TransactionParty exists, if not create a new one
        TransactionParty party = txPartyRepository.findByName(request.transactionParty())
                .orElseGet(() -> {
                    TransactionParty newParty = new TransactionParty();
                    newParty.setName(request.transactionParty());
                    return txPartyRepository.save(newParty);
                });

        // Check if Category exists, if not create a new one
        Category category = categoryRepository.findByName(request.category())
                .orElseGet(() -> {
                    Category newCategory = new Category();
                    newCategory.setName(request.category());
                    return categoryRepository.save(newCategory);
                });

        // Create Transaction
        Transaction transaction = new Transaction();
        transaction.setUserId(user.getId());
        transaction.setDate(request.date());
        transaction.setTransactionParty(party);
        transaction.setCategory(category);

        BigDecimal txAmountInCents = BigDecimal.valueOf(request.amount().amount());
        transaction.setAmount(txAmountInCents.divide(BigDecimal.valueOf(100), RoundingMode.HALF_EVEN));

        return transactionRepository.save(transaction);
    }
}
