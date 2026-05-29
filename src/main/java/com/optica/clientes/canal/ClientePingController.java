package com.optica.clientes.canal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Map;

@RestController
public class ClientePingController {

    @GetMapping("/clientes/ping")
    public Map<String, Object> ping() {
        return Map.of(
            "status", "OK",
            "timestamp", LocalDateTime.now().toString(),
            "message", "Backend clientes operativo"
        );
    }
}
