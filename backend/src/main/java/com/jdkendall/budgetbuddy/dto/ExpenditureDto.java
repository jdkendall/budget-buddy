package com.jdkendall.budgetbuddy.dto;

import com.jdkendall.budgetbuddy.model.Category;

public record ExpenditureDto(Category category, Dinero amount) {}
