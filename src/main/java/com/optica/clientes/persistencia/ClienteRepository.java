package com.optica.clientes.persistencia;

import com.optica.clientes.canal.ClienteDTO;

import java.util.List;


import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class ClienteRepository {

    private final JdbcTemplate jdbcTemplate;

    public ClienteRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<ClienteDTO> listarClientesActivos() {

        return jdbcTemplate.query(ClienteSQL.LISTAR_CLIENTES_ACTIVOS,
                (rs, rowNum) -> new ClienteDTO(
                        rs.getInt("id"),
                        rs.getString("estado"),
                        rs.getString("codsistema"),
                        rs.getString("nrodocumento"),
                        rs.getString("email"),
                        rs.getDate("feccreate") != null ? rs.getDate("feccreate").toLocalDate() : null,
                        rs.getString("nombrecompleto"),
                        rs.getString("telefono_1")));
    }

}