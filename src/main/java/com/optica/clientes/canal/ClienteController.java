package com.optica.clientes.canal;


import com.optica.clientes.negocio.ClienteService;



import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-clientes")
public class ClienteController {
    private final ClienteService servicio;

    
    public ClienteController(ClienteService servicio) {
        this.servicio = servicio;
    }

    @GetMapping
    public List<ClienteDTO> listarActivos() {
        return servicio.obtenerClientesActivos();
    }
    /* 
    @GetMapping("/{documento}")
    public ClienteDTO buscar(@PathVariable String documento) {
        return servicio.obtenerPorDocumento(documento);
    }

    @PostMapping
    public ResponseEntity<?> registrar(@RequestBody ClienteDTO dto) {
        ClienteDTO registrado = servicio.registrarCliente(dto);
        return ResponseEntity.status(201).body(
            Map.of(
                "mensaje", "✅ Cliente registrado con éxito",
                "cliente", registrado
            )
        );
    }*/

}
