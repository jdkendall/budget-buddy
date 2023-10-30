package com.jdkendall.budgetbuddy.config;

import com.jdkendall.budgetbuddy.interceptor.UserInterceptor;
import com.jdkendall.budgetbuddy.resolver.UserArgumentResolver;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    private final UserInterceptor userInterceptor;

    private final UserArgumentResolver userArgumentResolver;

    public WebMvcConfig(UserInterceptor userInterceptor, UserArgumentResolver userArgumentResolver) {
        this.userInterceptor = userInterceptor;
        this.userArgumentResolver = userArgumentResolver;
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(userInterceptor);
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(userArgumentResolver);
    }
}
