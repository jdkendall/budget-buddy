package com.jdkendall.budgetbuddy.repository;

import com.jdkendall.budgetbuddy.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByName(String name);
}
