document.addEventListener("DOMContentLoaded", function () {
  var filters = document.getElementById("collateral-type-filters");
  if (!filters) return;

  var buttons = Array.prototype.slice.call(
    filters.querySelectorAll(".collateral-type-filter")
  );
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("table.collateral-table tbody tr[data-type]")
  );
  var toc = document.querySelector(".tableofcontents");
  var tocLinks = toc
    ? Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'))
    : [];

  function headingForTable(table) {
    var el = table.previousElementSibling;
    while (el && el.tagName !== "H1" && el.tagName !== "H2") {
      el = el.previousElementSibling;
    }
    return el;
  }

  function applyFilter(value) {
    rows.forEach(function (row) {
      var match = value === "all" || row.getAttribute("data-type") === value;
      row.hidden = !match;
    });

    document.querySelectorAll("table.collateral-table").forEach(function (table) {
      var empty =
        table.querySelectorAll("tbody tr[data-type]:not([hidden])").length === 0;
      table.hidden = empty;
      var heading = headingForTable(table);
      if (heading) heading.hidden = empty;
    });

    tocLinks.forEach(function (link) {
      var id = (link.getAttribute("href") || "").slice(1);
      var target = id ? document.getElementById(id) : null;
      var li = link.parentElement;
      if (li && target) li.hidden = !!target.hidden;
    });

    if (toc) {
      Array.prototype.slice
        .call(toc.querySelectorAll("li"))
        .reverse()
        .forEach(function (li) {
          var childLis = li.querySelectorAll(":scope > ul > li");
          if (!childLis.length) return;
          var anyChildVisible = Array.prototype.some.call(childLis, function (child) {
            return !child.hidden;
          });
          var ownLink = li.querySelector(":scope > a[href^='#']");
          var ownId = ownLink ? (ownLink.getAttribute("href") || "").slice(1) : "";
          var ownTarget = ownId ? document.getElementById(ownId) : null;
          var ownVisible = ownTarget && !ownTarget.hidden;
          li.hidden = !(ownVisible || anyChildVisible);
        });
    }

    buttons.forEach(function (btn) {
      btn.classList.toggle(
        "is-active",
        btn.getAttribute("data-filter") === value
      );
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var value = btn.getAttribute("data-filter") || "all";
      applyFilter(value);
      try {
        var url = new URL(window.location.href);
        if (value === "all") {
          url.searchParams.delete("type");
        } else {
          url.searchParams.set("type", value);
        }
        window.history.replaceState({}, "", url);
      } catch (e) {
        /* ignore */
      }
    });
  });

  var initial = "all";
  try {
    var params = new URLSearchParams(window.location.search);
    var type = params.get("type");
    if (
      type &&
      buttons.some(function (b) {
        return b.getAttribute("data-filter") === type;
      })
    ) {
      initial = type;
    }
  } catch (e) {
    /* ignore */
  }
  applyFilter(initial);
});
