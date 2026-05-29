package com.optica.clientes.persistencia;

public class ClienteSQL {
    public static final String LISTAR_CLIENTES_ACTIVOS = """
            SELECT  id as id, 
                    estado as estado, 
                    codsistema as codsistema, 
                    nrodocumento as nrodocumento, 
                    email as email, 
                    feccreate as feccreate, 
                    nombres ||' '|| apellidopat ||' '|| apellidomat as nombrecompleto,  
                    telefono_1
            FROM yrsprd.cliente
            """;


}
