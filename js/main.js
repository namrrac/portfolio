/* ============================================================
   Site behaviour: theme, mobile menu, active nav, reveal
   Plain JavaScript, no dependencies.
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- theme toggle ---------- */

  var themeBtn = document.getElementById("theme-toggle");

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  /* ---------- mobile menu ---------- */

  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menu-btn");

  function setMenu(open) {
    if (!nav || !menuBtn) return;
    nav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (nav && menuBtn) {
    menuBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      setMenu(!nav.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setMenu(false);
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !menuBtn.contains(event.target)) setMenu(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 720) setMenu(false);
    });
  }

  /* ---------- active nav link ---------- */

  var page = window.location.pathname.split("/").pop() || "index.html";

  if (nav) {
    Array.prototype.forEach.call(nav.querySelectorAll("a"), function (link) {
      var target = (link.getAttribute("href") || "").split("#")[0];
      if (target === page) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ---------- current year ---------- */

  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- reveal on scroll ---------- */

  var revealables = document.querySelectorAll(".reveal");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!("IntersectionObserver" in window) || reduced) {
    Array.prototype.forEach.call(revealables, function (el) {
      el.classList.add("in");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    Array.prototype.forEach.call(revealables, function (el, index) {
      el.style.transitionDelay = Math.min(index % 3, 2) * 70 + "ms";
      observer.observe(el);
    });
  }
})();
