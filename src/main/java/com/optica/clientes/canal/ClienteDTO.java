package com.optica.clientes.canal;

import java.time.LocalDate;

public record ClienteDTO(
    Integer id,
    String estado,
    String codigoSistema,
    String nrodocumento,
    String email,
    LocalDate feccreate,
    String nombre,
    String telefono_1
) {}
