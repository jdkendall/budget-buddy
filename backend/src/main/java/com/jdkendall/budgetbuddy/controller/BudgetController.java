package com.jdkendall.budgetbuddy.controller;

import com.jdkendall.budgetbuddy.model.BBUser;
import com.jdkendall.budgetbuddy.model.BudgetOverview;
import com.jdkendall.budgetbuddy.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/budget")
public class BudgetController {
    @Autowired
    BudgetService budgetService;
    @GetMapping
    public CompletableFuture<BudgetOverview> getBudgetOverview(BBUser user) {
        // Retrieve multiple data points from DB and combine into budget overview
        return budgetService.getOverview(user);
    }
}
