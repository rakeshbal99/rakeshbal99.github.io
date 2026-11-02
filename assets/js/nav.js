// Mobile menu: tap the button to open/close; closes on outside tap, Escape,
// choosing a link, or widening the window past the mobile breakpoint.
(function () {
  var nav = document.querySelector('.site-nav');
  var button = nav && nav.querySelector('.menu-icon');
  if (!nav || !button) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  button.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains('is-open'));
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !nav.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      button.focus();
    }
  });

  nav.querySelectorAll('.page-link').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 600 && nav.classList.contains('is-open')) setOpen(false);
  });

  // Back/forward cache restores the old DOM; make sure the menu comes back closed.
  window.addEventListener('pageshow', function () { setOpen(false); });
})();
