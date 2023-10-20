package com.jdkendall.budgetbuddy.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(indexes = {
        @Index(name = "index_firebase_uid", columnList = "firebase_uid")
})
public class BBUser {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "firebase_uid", unique = true, nullable = false)
    private String firebaseUid;

    @OneToMany(cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    public List<Transaction> transactions;
}
