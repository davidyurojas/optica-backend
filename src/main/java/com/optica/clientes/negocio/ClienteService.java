package com.optica.clientes.negocio;

import com.optica.clientes.canal.ClienteDTO;

import com.optica.clientes.persistencia.ClienteRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ClienteService {
    private final ClienteRepository repo;

    public ClienteService(ClienteRepository repo) {
        this.repo = repo;
    }

    public List<ClienteDTO> obtenerClientesActivos() {
        return repo.listarClientesActivos();
    }

    /* 
    public ClienteDTO obtenerPorDocumento(String documento) {
        return repo.buscarPorDocumento(documento);
    }

    public ClienteDTO registrarCliente(ClienteDTO dto) {
        Cliente cliente = new Cliente(
            dto.id(),
            dto.activo(),
            dto.codigoSistema(),
            dto.documento(),
            dto.email(),
            dto.fechaAlta(),
            dto.nombre(),
            dto.telefono()
        );

        return repo.insertar(cliente);
    }*/
}
