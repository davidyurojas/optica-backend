package com.optica.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class DashboardController {

    @GetMapping("/admin/index")
    public String getHomePage(HttpServletRequest request) {
        if ("XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
            return "admin/dashboard :: contenido";
        }
        return "admin/adminlte_layout";
    }

    @GetMapping("/admin/dashboard")
    public String getDashboardPage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
            return "redirect:/admin/index";
        }
        return "admin/dashboard :: contenido";
    }

    @GetMapping("/admin/product")
    public String getProductPage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
        return "redirect:/admin/index";
        }
        return "admin/product :: contenido";
    }

    @GetMapping("/admin/category")
    public String getCategoryPage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
        return "redirect:/admin/index";
        }
        return "admin/category :: contenido";
    }

    @GetMapping("/admin/customer")
    public String getCustomerPage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
        return "redirect:/admin/index";
        }
        return "admin/customer :: contenido";
    }

    @GetMapping("/admin/customer-new")
    public String getNewCustomerPage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
            return "redirect:/admin/index";
        }
        return "admin/customer-new :: contenido";
    }


    @GetMapping("/admin/salesorders")
    public String getSalesPage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
            return "redirect:/admin/index";
        }
        return "admin/salesorders :: contenido";
    }

    
    @GetMapping("/admin/supplier")
    public String getSupplierPage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
            return "redirect:/admin/index";
        }
        return "admin/supplier :: contenido";
    }

    @GetMapping("/admin/income")
    public String getIncomePage(HttpServletRequest request) {
        if (!"XMLHttpRequest".equals(request.getHeader("X-Requested-With"))) {
            return "redirect:/admin/index";
        }
        return "admin/income :: contenido";
    }


    

}
