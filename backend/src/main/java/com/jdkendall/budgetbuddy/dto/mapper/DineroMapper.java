package com.jdkendall.budgetbuddy.dto.mapper;

import com.jdkendall.budgetbuddy.dto.Dinero;
import com.jdkendall.budgetbuddy.dto.TransactionDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.math.BigDecimal;

@Mapper(componentModel = "spring")
public abstract class DineroMapper {
    @Mapping(target = "amount", source = "source")
    @Mapping(target = "currencyCode", constant = "USD")
    public abstract Dinero bigDToDinero(BigDecimal source);

    public int bigDecimalToAmount(BigDecimal source) {
        return source.multiply(new BigDecimal(100)).intValue();
    }
}
