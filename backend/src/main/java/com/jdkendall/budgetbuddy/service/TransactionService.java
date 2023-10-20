package com.jdkendall.budgetbuddy.service;

import com.jdkendall.budgetbuddy.dto.CreateTransactionRequest;
import com.jdkendall.budgetbuddy.model.BBUser;
import com.jdkendall.budgetbuddy.model.Category;
import com.jdkendall.budgetbuddy.model.Transaction;
import com.jdkendall.budgetbuddy.model.TransactionParty;
import com.jdkendall.budgetbuddy.repository.CategoryRepository;
import com.jdkendall.budgetbuddy.repository.TransactionPartyRepository;
import com.jdkendall.budgetbuddy.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private TransactionPartyRepository txPartyRepository;

    public List<Transaction> getAllTransactionsForUser(UUID id) {
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
        transaction.setAmount(BigDecimal.valueOf(request.amount()));
        transaction.setTransactionParty(party);
        transaction.setCategory(category);
        return transactionRepository.save(transaction);
    }
}