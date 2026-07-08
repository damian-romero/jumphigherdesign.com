/* Unobtrusive site JS — mobile nav toggle + showcase filter. No inline handlers. */
(function () {
  // Mobile menu
  var burger = document.getElementById('nav-burger');
  var menu = document.getElementById('nav-mobile');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 700) {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Showcase filter (only present on /showcase/)
  var fbtns = document.querySelectorAll('.fbtn');
  var grid = document.getElementById('sc-grid');
  if (fbtns.length && grid) {
    fbtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var type = btn.getAttribute('data-filter');
        fbtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        grid.querySelectorAll('.sc-card').forEach(function (c) {
          c.style.display = (type === 'all' || c.getAttribute('data-t') === type) ? '' : 'none';
        });
      });
    });
  }
})();
