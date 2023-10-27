package com.jdkendall.budgetbuddy.controller;

import com.jdkendall.budgetbuddy.dto.BudgetOverviewDto;
import com.jdkendall.budgetbuddy.dto.mapper.BudgetMapper;
import com.jdkendall.budgetbuddy.model.BBUser;
import com.jdkendall.budgetbuddy.service.BudgetService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {
    final
    BudgetService budgetService;

    private final BudgetMapper budgetMapper;

    public BudgetController(BudgetService budgetService, BudgetMapper budgetMapper) {
        this.budgetService = budgetService;
        this.budgetMapper = budgetMapper;
    }

    @GetMapping
    public CompletableFuture<BudgetOverviewDto> getBudgetOverview(BBUser user) {
        // Retrieve multiple data points from DB and combine into budget overview
        return budgetService.getOverview(user).thenApply(budgetMapper::budgetOverviewToDTO);
    }
}
