/**
 * menuSPA.js
 * Navegación SPA con activación dinámica de menús en AdminLTE
 * Autor: David (Auditor técnico, consultor funcional y arquitecto backend)
 * Fecha: 2025-10-08
 * Descripción: Carga fragmentos dinámicos sin recarga, sincroniza estado visual de menús y submenús,
 *              y respeta la lógica de AdminLTE para apertura/cierre de íconos y estructura.
 */
import { initClientes } from './clienteSPA.js';

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[data-link]');
  const contenido = document.getElementById('contenido');

  /**
   * Activa visualmente el enlace seleccionado y su menú padre.
   * Cierra todos los submenús excepto el activo, respetando la lógica de AdminLTE.
   * @param {string} url - Ruta del fragmento cargado
   */
  function activarEnlace(url) {
  // Buscar enlace exacto
  let enlaceActivo = Array.from(document.querySelectorAll('.main-sidebar a[data-link]'))
    .find(link => link.getAttribute('href') === url);

  // Si no se encuentra, buscar el enlace cuyo href sea prefijo de la URL
  if (!enlaceActivo) {
    const enlacesMenu = document.querySelectorAll('.main-sidebar a[data-link]');
    let mejorCoincidencia = null;
    let longitudMaxima = 0;

    enlacesMenu.forEach(link => {
      const href = link.getAttribute('href');
      if (url.startsWith(href) && href.length > longitudMaxima) {
        mejorCoincidencia = link;
        longitudMaxima = href.length;
      }
    });

    enlaceActivo = mejorCoincidencia;
  }

  const treeviewItem = enlaceActivo?.closest('.nav-treeview');
  const navItemPadre = treeviewItem?.closest('.nav-item');

  // Limpiar clases 'active'
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

  // Cerrar todos los menús excepto el activo
  document.querySelectorAll('.nav-item').forEach(item => {
    const treeview = item.querySelector('.nav-treeview');
    const toggleLink = item.querySelector('.nav-link');

    if (item !== navItemPadre && treeview && item.classList.contains('menu-open') && toggleLink) {
      toggleLink.click(); // Cierre compatible con AdminLTE
    }

    if (item !== navItemPadre) {
      item.classList.remove('menu-open');
    }
  });

  // Activar enlace actual y su menú padre
  if (enlaceActivo) {
    enlaceActivo.classList.add('active');

    if (treeviewItem) {
      const navLinkPadre = navItemPadre.querySelector('.nav-link:first-child');
      if (navItemPadre && navLinkPadre) {
        navItemPadre.classList.add('menu-open');
        navLinkPadre.classList.add('active');
      }
    }
  }
}


  /**
   * Carga el fragmento SPA y actualiza la URL sin recargar la página.
   * @param {string} url - Ruta del fragmento
   * @param {boolean} push - Si debe actualizar el historial
   */
  function cargarFragmento(url, push = true) {
    fetch(url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(res => res.text())
      .then(html => {
        contenido.innerHTML = html;
        activarEnlace(url);
        inicializarDataTables();

        if (url.includes('/customer')) initClientes();

        if (push) history.pushState(null, '', url);
      });
  }

  // Carga inicial
  const urlInicial = '/admin/dashboard';
  cargarFragmento(urlInicial, false);

  // Enlaces SPA
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const url = link.getAttribute('href');
      cargarFragmento(url);
    });
  });
  
  // Delegación SPA para enlaces dinámicos dentro de #contenido
contenido.addEventListener('click', e => {
  const link = e.target.closest('a[data-link]');
  if (link) {
    e.preventDefault();
    const url = link.getAttribute('href');
    cargarFragmento(url);
  }
});

  // Botón "Atrás"
  window.addEventListener('popstate', () => {
    const url = location.pathname;
    cargarFragmento(url, false);
  });
});
function inicializarDataTables() {
  const tabla1 = document.getElementById('example1');
  if (tabla1 && !$.fn.DataTable.isDataTable(tabla1)) {
    $('#example1').DataTable({
      responsive: true,
      lengthChange: false,
      searching: true,
      autoWidth: false,
      buttons: ["copy", "csv", "excel", "pdf", "print"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
  }

  const tabla2 = document.getElementById('example2');
  if (tabla2 && !$.fn.DataTable.isDataTable(tabla2)) {
    $('#example2').DataTable({
      paging: true,
      lengthChange: false,
      searching: false,
      ordering: true,
      info: true,
      autoWidth: false,
      responsive: true,
    });
  }
}
export { inicializarDataTables };