(function () {
  var cfg = window.__SLIDES_UX__;
  if (!cfg) return;

  try {
    var pref = localStorage.getItem("slides-ux-mode");
    if (pref === "new" && cfg.mode === "classic") {
      window.location.replace(cfg.newUrl);
      return;
    }
    if (pref === "classic" && cfg.mode === "new") {
      window.location.replace(cfg.classicUrl);
      return;
    }
  } catch (e) {}

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var root = document.getElementById("ux-switcher");
    if (!root) return;
    var button = root.querySelector("[data-ux-target]");
    if (!button) return;
    button.addEventListener("click", function () {
      var target = button.getAttribute("data-ux-target");
      try {
        localStorage.setItem("slides-ux-mode", target);
      } catch (e) {}
      window.location.href =
        target === "new" ? cfg.newUrl : cfg.classicUrl;
    });
  });
})();
