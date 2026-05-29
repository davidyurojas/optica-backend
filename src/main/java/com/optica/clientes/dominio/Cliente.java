package com.optica.clientes.dominio;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {
    private Integer id;
    private String estado;
    private String codigoSistema;
    private String nrodocumento;
    private String email;
    private LocalDate feccreate;
    private String nombre;
    private String telefono_1;

    public boolean documentoValido() {
        return nrodocumento != null && nrodocumento.length() == 8;
    }
}
