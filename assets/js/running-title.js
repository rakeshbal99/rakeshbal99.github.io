// Running title (poems and posts): reveals once the main title scrolls out of view, hides again
// at the end of the article, and tracks reading progress (used by the mobile bar).
(function () {
  var bar = document.querySelector('.running-title');
  var title = document.querySelector('.post .post-title');
  var end = document.querySelector('.running-title-end');
  if (!bar || !title || !end) return;

  var ticking = false;

  function update() {
    ticking = false;
    var titleBottom = title.getBoundingClientRect().bottom;
    var endTop = end.getBoundingClientRect().top;
    var viewport = window.innerHeight;

    var visible = titleBottom < 0 && endTop > viewport * 0.25;
    bar.classList.toggle('is-visible', visible);

    // Progress from the title leaving the screen to the end marker reaching the bottom.
    var start = title.getBoundingClientRect().bottom + window.scrollY;
    var finish = end.getBoundingClientRect().top + window.scrollY - viewport;
    var span = Math.max(finish - start, 1);
    var progress = Math.min(Math.max((window.scrollY - start) / span, 0), 1);
    bar.style.setProperty('--read-progress', progress);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  bar.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();
