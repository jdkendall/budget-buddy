package com.jdkendall.budgetbuddy.interceptor;

import com.jdkendall.budgetbuddy.model.BBUser;
import com.jdkendall.budgetbuddy.repository.UserRepository;
import jakarta.annotation.Nullable;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class UserInterceptor implements HandlerInterceptor {

    public static final String IDENTITY_CLAIM = "sub";
    private final UserRepository userRepository;

    private final JwtDecoder jwtDecoder;

    public UserInterceptor(UserRepository userRepository, JwtDecoder jwtDecoder) {
        this.userRepository = userRepository;
        this.jwtDecoder = jwtDecoder;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, @Nullable HttpServletResponse response, @Nullable Object handler) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String jwtToken = authHeader.substring(7);
            Jwt jwt = jwtDecoder.decode(jwtToken);
            String uid = jwt.getClaimAsString(IDENTITY_CLAIM);
            BBUser user = userRepository.findByFirebaseUid(uid)
                    .orElseGet(() -> {
                        BBUser newUser = new BBUser();
                        newUser.setFirebaseUid(uid);
                        return userRepository.save(newUser);
                    });
            request.setAttribute("user", user);
        }
        return true;
    }
}
