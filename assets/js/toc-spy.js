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

    var activeLink = linkById[id];
    if (activeLink && typeof activeLink.scrollIntoView === "function") {
      activeLink.scrollIntoView({ block: "nearest", inline: "nearest" });
    }
  }

  function updateFromScroll() {
    var offset = 120;
    var current = headings[0] ? headings[0].id : null;

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
