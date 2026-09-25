---
title: Ansible Slide Finder
permalink: /ux/
---

<p>The Slide Finder new layout is now the default home page.</p>
<p><a href="{{ '/' | relative_url }}">Continue to Ansible Slide Finder</a></p>
<script>
  (function () {
    var dest = {{ '/' | relative_url | jsonify }};
    try {
      localStorage.removeItem("slides-ux-mode");
    } catch (e) {}
    window.location.replace(dest);
  })();
</script>
<meta http-equiv="refresh" content="0;url={{ '/' | relative_url }}">
