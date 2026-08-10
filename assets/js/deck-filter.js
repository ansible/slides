document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("deck-filter");
  var status = document.getElementById("deck-filter-status");
  if (!input) return;

  function isFilterableRow(row) {
    return !row.closest(".tableofcontents");
  }

  function isFilterableTable(table) {
    return !table.closest(".tableofcontents");
  }

  var rows = Array.prototype.slice
    .call(document.querySelectorAll("section table tbody tr"))
    .filter(isFilterableRow);

  var tables = Array.prototype.slice
    .call(document.querySelectorAll("section table"))
    .filter(isFilterableTable);

  var highlightWrap = document.querySelector(".highlighttable");
  var bulletinTables = highlightWrap
    ? Array.prototype.slice.call(highlightWrap.querySelectorAll("table"))
    : [];

  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section > h1, section > h2")
  );

  function normalize(text) {
    return (text || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function tokens(text) {
    var normalized = normalize(text);
    return normalized ? normalized.split(" ") : [];
  }

  function rowMatches(rowText, queryTokens) {
    if (!queryTokens.length) return true;
    var haystack = normalize(rowText);
    return queryTokens.every(function (token) {
      return haystack.indexOf(token) !== -1;
    });
  }

  function applyFilter() {
    var queryTokens = tokens(input.value);
    var query = queryTokens.join(" ");
    var visible = 0;

    rows.forEach(function (row) {
      var match = rowMatches(row.textContent, queryTokens);
      row.hidden = !match;
      if (match) visible += 1;
    });

    tables.forEach(function (table) {
      var visibleRows = table.querySelectorAll("tbody tr:not([hidden])");
      table.hidden = Boolean(query && visibleRows.length === 0);
    });

    if (highlightWrap) {
      var anyBulletinVisible = bulletinTables.some(function (table) {
        return !table.hidden;
      });
      highlightWrap.hidden = Boolean(query && !anyBulletinVisible);
    }

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
