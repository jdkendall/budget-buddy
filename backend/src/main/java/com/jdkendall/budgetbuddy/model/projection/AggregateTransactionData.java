package com.jdkendall.budgetbuddy.model.projection;

import java.math.BigDecimal;

public interface AggregateTransactionData {
    BigDecimal getTotalExpenditures();
    BigDecimal getTotalIncome();
}
