document.addEventListener("DOMContentLoaded", function () {
  var filters = document.getElementById("collateral-type-filters");
  if (!filters) return;

  var buttons = Array.prototype.slice.call(
    filters.querySelectorAll(".collateral-type-filter")
  );
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("table.collateral-table tbody tr[data-type]")
  );
  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section > h1, section > h2")
  );

  function applyFilter(value) {
    rows.forEach(function (row) {
      var match = value === "all" || row.getAttribute("data-type") === value;
      row.hidden = !match;
    });

    document.querySelectorAll("table.collateral-table").forEach(function (table) {
      var visible = table.querySelectorAll("tbody tr[data-type]:not([hidden])");
      table.hidden = visible.length === 0;
      var heading = table.previousElementSibling;
      while (heading && heading.tagName !== "H1" && heading.tagName !== "H2") {
        heading = heading.previousElementSibling;
      }
      if (heading && (heading.tagName === "H1" || heading.tagName === "H2")) {
        // defer section hide to pass below
      }
    });

    sections.forEach(function (heading) {
      if (heading.closest(".editlink")) return;
      var el = heading.nextElementSibling;
      var hasVisible = false;
      while (el && el.tagName !== "H1" && el.tagName !== "H2") {
        if (el.matches && el.matches("table.collateral-table") && !el.hidden) {
          hasVisible = true;
        }
        if (
          el.querySelectorAll &&
          el.querySelectorAll("table.collateral-table:not([hidden])").length
        ) {
          hasVisible = true;
        }
        el = el.nextElementSibling;
      }
      // Keep the page title (first h1 with editlink) always visible
      if (heading.querySelector && heading.querySelector(".editlink")) {
        heading.hidden = false;
        return;
      }
      heading.hidden = !hasVisible;
    });

    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-filter") === value);
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
    if (type && buttons.some(function (b) { return b.getAttribute("data-filter") === type; })) {
      initial = type;
    }
  } catch (e) {
    /* ignore */
  }
  applyFilter(initial);
});
