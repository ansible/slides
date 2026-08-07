document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("deck-filter");
  var status = document.getElementById("deck-filter-status");
  if (!input) return;

  function isCatalogRow(row) {
    return !row.closest(".highlighttable") && !row.closest(".tableofcontents");
  }

  function isCatalogTable(table) {
    return !table.closest(".highlighttable") && !table.closest(".tableofcontents");
  }

  var rows = Array.prototype.slice
    .call(document.querySelectorAll("section table tbody tr"))
    .filter(isCatalogRow);

  var tables = Array.prototype.slice
    .call(document.querySelectorAll("section table"))
    .filter(isCatalogTable);

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

    tables.forEach(function (table) {
      var visibleRows = table.querySelectorAll("tbody tr:not([hidden])");
      table.hidden = Boolean(query && visibleRows.length === 0);
    });

    sections.forEach(function (heading) {
      var el = heading.nextElementSibling;
      var hasVisible = false;
      while (el && !/^H[1-2]$/.test(el.tagName)) {
        if (el.tagName === "TABLE" && !el.hidden) {
          hasVisible = true;
          break;
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
