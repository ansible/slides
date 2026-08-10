document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("deck-filter");
  var status = document.getElementById("deck-filter-status");
  if (!input) return;

  function isFilterableRow(row) {
    return !row.closest(".tableofcontents");
  }

  function isFilterableGroup(el) {
    return !el.closest(".tableofcontents") && !el.closest(".highlighttable");
  }

  var rows = Array.prototype.slice
    .call(
      document.querySelectorAll(
        "section table tbody tr, section .deck-list > .deck-item"
      )
    )
    .filter(isFilterableRow);

  var groups = Array.prototype.slice
    .call(document.querySelectorAll("section table, section .deck-list"))
    .filter(isFilterableGroup);

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

  function visibleCountInGroup(group) {
    if (group.classList.contains("deck-list")) {
      return Array.prototype.filter.call(group.children, function (child) {
        return child.classList.contains("deck-item") && !child.hidden;
      }).length;
    }
    return group.querySelectorAll("tbody tr:not([hidden])").length;
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

    groups.forEach(function (group) {
      group.hidden = Boolean(query && visibleCountInGroup(group) === 0);
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
        var isGroup =
          el.tagName === "TABLE" ||
          (el.classList && el.classList.contains("deck-list"));
        if (isGroup && !el.hidden) {
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
