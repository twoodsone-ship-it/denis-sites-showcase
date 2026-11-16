(function () {
  var raw = (window.TELEGRAM_USERNAME || "").trim().replace(/^@/, "");
  var ok = /^[A-Za-z0-9_]{5,32}$/.test(raw);
  var url = ok ? "https://t.me/" + raw : "";
  var params = new URLSearchParams(location.search);
  var showHint = params.get("admin") === "1";
  var note = document.getElementById("admin-note");
  var missing = document.getElementById("tg-missing");
  if (!ok && note && showHint) note.classList.add("is-on");
  if (!ok && missing && showHint) missing.classList.add("is-on");
  document.querySelectorAll("[data-tg]").forEach(function (el) {
    if (ok) {
      el.setAttribute("href", url);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
      el.removeAttribute("aria-disabled");
    } else {
      el.setAttribute("href", "#contact");
      el.setAttribute("aria-disabled", "true");
    }
  });
})();
