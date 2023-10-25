package com.jdkendall.budgetbuddy.dto;

import com.jdkendall.budgetbuddy.model.Category;

import java.math.BigDecimal;

public record ExpenditureDto(Category category, Dinero amount) {}
