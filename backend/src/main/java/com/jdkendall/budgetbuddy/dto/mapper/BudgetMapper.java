package com.jdkendall.budgetbuddy.dto.mapper;

import com.jdkendall.budgetbuddy.dto.BudgetOverviewDto;
import com.jdkendall.budgetbuddy.model.BudgetOverview;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses={DineroMapper.class, TransactionMapper.class, ExpenditureMapper.class})
public interface BudgetMapper {
    BudgetOverviewDto budgetOverviewToDTO(BudgetOverview source);
}
