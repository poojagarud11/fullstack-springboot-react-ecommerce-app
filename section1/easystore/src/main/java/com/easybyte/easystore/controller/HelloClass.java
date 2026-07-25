package com.easybyte.easystore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloClass {

    @GetMapping("/hello")
    public String hello(){
        return  "Hello World" ;
    }
}
