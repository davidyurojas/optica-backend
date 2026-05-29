package com.optica.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping("/fragment/index")
    public String index() {
        return "admin/index";
    }

    @GetMapping("/fragment/home")
    public String homeFragment() {
        return "admin/fragment-home :: contenido";
    }

    @GetMapping("/fragment/about")
    public String aboutFragment() {
        return "admin/fragment-about :: contenido";
    }
}