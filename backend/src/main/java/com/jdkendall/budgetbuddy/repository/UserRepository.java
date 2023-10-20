package com.jdkendall.budgetbuddy.repository;

import com.jdkendall.budgetbuddy.model.BBUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<BBUser, UUID> {
    Optional<BBUser> findByFirebaseUid(String uid);
}
