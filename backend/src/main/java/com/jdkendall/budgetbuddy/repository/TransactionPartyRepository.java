package com.jdkendall.budgetbuddy.repository;

import com.jdkendall.budgetbuddy.model.TransactionParty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TransactionPartyRepository extends JpaRepository<TransactionParty, Long> {
    Optional<TransactionParty> findByName(String name);
}
