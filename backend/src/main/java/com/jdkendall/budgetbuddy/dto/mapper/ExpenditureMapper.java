package com.jdkendall.budgetbuddy.dto.mapper;

import com.jdkendall.budgetbuddy.dto.ExpenditureDto;
import com.jdkendall.budgetbuddy.model.Expenditure;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses=DineroMapper.class)
public interface ExpenditureMapper {
    ExpenditureDto expenditureoDTO(Expenditure expenditure);
}
