package com.jdkendall.budgetbuddy.dto.mapper;

import com.jdkendall.budgetbuddy.dto.TransactionDto;
import com.jdkendall.budgetbuddy.model.Transaction;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface TransactionMapper {
    @Mapping(target = "transactionParty", source = "transactionParty.name")
    @Mapping(target = "category", source = "category.name")
    TransactionDto txToDTO(Transaction transaction);
}
