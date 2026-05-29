document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[data-link]');
  const contenido = document.getElementById('contenido');

  function activarEnlace(url) {
    // 🔹 Buscar el enlace activo y su menú padre
    const enlaceActivo = Array.from(links).find(link => link.getAttribute('href') === url);
    const treeviewItem = enlaceActivo?.closest('.nav-treeview');
    const navItemPadre = treeviewItem?.closest('.nav-item');

    // 🔹 Limpiar clases 'active'
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));

    // 🔹 Cerrar todos los menús excepto el activo
    document.querySelectorAll('.nav-item').forEach(item => {
      const treeview = item.querySelector('.nav-treeview');
      const toggleLink = item.querySelector('.nav-link');

      if (item !== navItemPadre && treeview && item.classList.contains('menu-open') && toggleLink) {
        toggleLink.click(); // ← cerrar con lógica AdminLTE
      }

      if (item !== navItemPadre) {
        item.classList.remove('menu-open');
      }
    });

    // 🔹 Activar enlace actual
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

  // 🔹 Carga inicial
  const urlInicial = '/admin/dashboard';
  fetch(urlInicial)
    .then(res => res.text())
    .then(html => {
      contenido.innerHTML = html;
      activarEnlace(urlInicial);
    });

  // 🔹 Enlaces SPA
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const url = link.getAttribute('href');
      fetch(url)
        .then(res => res.text())
        .then(html => {
          contenido.innerHTML = html;
          history.pushState(null, '', url);
          activarEnlace(url);
        });
    });
  });

  // 🔹 Botón "Atrás"
  window.addEventListener('popstate', () => {
    const url = location.pathname;
    fetch(url)
      .then(res => res.text())
      .then(html => {
        contenido.innerHTML = html;
        activarEnlace(url);
      });
  });
});
