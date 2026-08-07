document.addEventListener("DOMContentLoaded", function () {
  var toc = document.querySelector(".tableofcontents");
  if (!toc) return;

  var links = Array.prototype.slice.call(
    toc.querySelectorAll('a[href^="#"]')
  );
  if (!links.length) return;

  var linkById = {};
  var headings = [];

  links.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    if (!id) return;
    var heading = document.getElementById(id);
    if (!heading) return;
    linkById[id] = link;
    headings.push(heading);
  });

  if (!headings.length) return;

  var activeId = null;

  function setActive(id) {
    if (!id || id === activeId || !linkById[id]) return;
    activeId = id;

    links.forEach(function (link) {
      link.classList.toggle("is-active", link === linkById[id]);
    });

    // Only adjust scroll inside a fixed TOC panel.
    // On mobile the TOC is in normal document flow, so scrollIntoView
    // would yank the whole page back to the menu.
    var activeLink = linkById[id];
    if (
      activeLink &&
      window.getComputedStyle(toc).position === "fixed" &&
      typeof activeLink.scrollIntoView === "function"
    ) {
      activeLink.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }

  function updateFromScroll() {
    var offset = 140;
    var current = headings[0] ? headings[0].id : null;
    var scrollBottom =
      window.scrollY + window.innerHeight;
    var docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    // Near page bottom: pick the last heading still above the fold,
    // so Logos / late sections can become active.
    if (docHeight - scrollBottom < 120) {
      for (var j = headings.length - 1; j >= 0; j--) {
        if (headings[j].getBoundingClientRect().top <= window.innerHeight) {
          setActive(headings[j].id);
          return;
        }
      }
      setActive(headings[headings.length - 1].id);
      return;
    }

    for (var i = 0; i < headings.length; i++) {
      var top = headings[i].getBoundingClientRect().top;
      if (top <= offset) {
        current = headings[i].id;
      } else {
        break;
      }
    }

    setActive(current);
  }

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      var id = link.getAttribute("href").slice(1);
      setActive(id);
    });
  });

  var ticking = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateFromScroll();
        ticking = false;
      });
    },
    { passive: true }
  );

  updateFromScroll();
});
