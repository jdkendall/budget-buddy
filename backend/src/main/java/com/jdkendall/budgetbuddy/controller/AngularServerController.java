package com.jdkendall.budgetbuddy.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AngularServerController {
    @RequestMapping(value = "/**/*", produces = MediaType.TEXT_HTML_VALUE)
    public String forwardToAngularRoute() {
        return "forward:/index.html";
    }
}
