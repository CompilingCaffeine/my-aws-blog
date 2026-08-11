/**
 * The only runtime JavaScript on the site.
 *
 * Deliberately stateless: the current theme already lives in the DOM (set
 * before first paint by the inline script in head.html), so the button reads
 * it back out of the document rather than tracking it. Which icon shows is
 * decided in CSS by the same three-state rule the tokens use, so the control
 * cannot drift out of sync with the palette.
 */
(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var root = document.documentElement;
    var explicit = root.getAttribute("data-theme");
    var current =
      explicit === "dark" || explicit === "light"
        ? explicit
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    var next = current === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {
      /* private mode — the toggle still works for this session */
    }
  });
})();
