/**
 * clienteSPA.js
 * Módulo SPA para gestión de clientes activos
 * Autor: David (Auditor técnico, consultor funcional y arquitecto backend)
 * Fecha: 2025-10-10
 * Descripción: Consume API REST de clientes, renderiza tabla dinámica y activa DataTables.
 */
import { inicializarDataTables } from './menuSPA.js';
export function initClientes() {
  fetch('/api-clientes')
    .then(res => res.json())
    .then(clientes => {
      const tabla = $('#example1');
      const tbody = document.querySelector('#example1 tbody');
      if (!tbody) return;

      // Destruir instancia previa si existe
      if ($.fn.DataTable.isDataTable(tabla)) {
        tabla.DataTable().clear().destroy();
      }

      tbody.innerHTML = ''; // limpiar contenido previo

      clientes.forEach(cliente => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${cliente.id}</td>
          <td>${cliente.nrodocumento}</td>
          <td>${cliente.nombre}</td>
          <td>${cliente.telefono_1}</td>
          <td>${cliente.email}</td>     
          <td class="text-center">
              <div class="btn-group btn-group-sm">
                <a href="#" class="btn btn-info mr-1"><i class="fas fa-eye"></i></a>
                <a href="#" class="btn btn-success mr-1"><i class="fas fa-pencil-alt"></i></a>
                <a href="#" class="btn btn-danger mr-1"><i class="fas fa-trash"></i></a>
              </div>
          </td>     
          
        `;
        tbody.appendChild(fila);
      });

      // Activar DataTables sobre contenido ya renderizado
      inicializarDataTables();
    });
}
