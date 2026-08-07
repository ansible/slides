document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("deck-filter");
  var status = document.getElementById("deck-filter-status");
  var main = document.querySelector(".page-main");
  if (!input || !main) return;

  var rows = Array.prototype.slice.call(main.querySelectorAll("table tbody tr"));
  var sections = Array.prototype.slice.call(main.querySelectorAll("h1, h2, h3"));

  function normalize(text) {
    return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function applyFilter() {
    var query = normalize(input.value);
    var visible = 0;

    rows.forEach(function (row) {
      var match = !query || normalize(row.textContent).indexOf(query) !== -1;
      row.hidden = !match;
      row.classList.toggle("deck-filter-hidden", !match);
      if (match) visible += 1;
    });

    sections.forEach(function (heading) {
      var el = heading.nextElementSibling;
      var hasVisible = false;
      while (el && !/^H[1-3]$/.test(el.tagName)) {
        if (el.tagName === "TABLE") {
          var visibleRows = el.querySelectorAll("tbody tr:not([hidden])");
          if (visibleRows.length) hasVisible = true;
        }
        el = el.nextElementSibling;
      }
      heading.hidden = query && !hasVisible;
      heading.classList.toggle("deck-filter-hidden", query && !hasVisible);
    });

    if (!status) return;
    if (!query) {
      status.textContent = "";
    } else {
      status.textContent =
        visible + " result" + (visible === 1 ? "" : "s");
    }
  }

  input.addEventListener("input", applyFilter);
  input.addEventListener("search", applyFilter);
});
