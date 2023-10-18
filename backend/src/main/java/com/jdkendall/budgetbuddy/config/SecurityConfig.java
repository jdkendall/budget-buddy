package com.jdkendall.budgetbuddy.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // Set up Firebase authentication via OAuth2 JWTs + JWKs
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests((ahr) -> ahr.anyRequest().authenticated())  // Protect all endpoints
                .oauth2ResourceServer((o2rs) -> o2rs.jwt(j -> j.jwkSetUri("https://www.googleapis.com/service_accounts/v1/jwk/YOUR_FIREBASE_PROJECT_ID")));
        return http.build();
    }
}

