document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("deck-filter");
  var status = document.getElementById("deck-filter-status");
  if (!input) return;

  function isCatalogRow(row) {
    return !row.closest(".highlighttable") && !row.closest(".tableofcontents");
  }

  var rows = Array.prototype.slice
    .call(document.querySelectorAll("section table tbody tr"))
    .filter(isCatalogRow);

  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section > h1, section > h2")
  );

  function normalize(text) {
    return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function applyFilter() {
    var query = normalize(input.value);
    var visible = 0;

    rows.forEach(function (row) {
      var match = !query || normalize(row.textContent).indexOf(query) !== -1;
      row.hidden = !match;
      if (match) visible += 1;
    });

    sections.forEach(function (heading) {
      var el = heading.nextElementSibling;
      var hasVisible = false;
      while (el && !/^H[1-2]$/.test(el.tagName)) {
        if (el.tagName === "TABLE") {
          var visibleRows = el.querySelectorAll("tbody tr:not([hidden])");
          if (visibleRows.length) hasVisible = true;
        }
        el = el.nextElementSibling;
      }
      heading.hidden = Boolean(query && !hasVisible);
    });

    if (!status) return;
    status.textContent = query
      ? visible + " result" + (visible === 1 ? "" : "s")
      : "";
  }

  input.addEventListener("input", applyFilter);
  input.addEventListener("search", applyFilter);
});
