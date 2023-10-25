package com.jdkendall.budgetbuddy.model;

import java.math.BigDecimal;

public record Expenditure(Category category, BigDecimal amount) {}
