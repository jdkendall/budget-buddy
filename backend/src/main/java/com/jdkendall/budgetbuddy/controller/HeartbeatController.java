package com.jdkendall.budgetbuddy.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/api/heartbeat")
public class HeartbeatController {
    @GetMapping
    public ResponseEntity<Void> heartbeat() {
        return ResponseEntity.ok().build();
    }
}
