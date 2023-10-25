package com.jdkendall.budgetbuddy.dto.mapper;

import com.jdkendall.budgetbuddy.dto.BudgetOverviewDto;
import com.jdkendall.budgetbuddy.dto.TransactionDto;
import com.jdkendall.budgetbuddy.model.BudgetOverview;
import com.jdkendall.budgetbuddy.model.Transaction;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses={DineroMapper.class, TransactionMapper.class, ExpenditureMapper.class})
public interface BudgetMapper {
    BudgetOverviewDto budgetOverviewToDTO(BudgetOverview source);
}
