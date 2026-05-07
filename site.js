(function () {
  var toggle = document.querySelector('.menu-toggle');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');
  if (!toggle) return;

  function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }
  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  toggle.addEventListener('click', function () {
    sidebar.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  sidebar.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
})();
