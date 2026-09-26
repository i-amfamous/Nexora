/* ============================================
   Main.js — Shared across all pages
   ============================================ */

(function () {
  "use strict";

  /* --- Mobile Navigation --- */

  var toggle = document.querySelector(".nav-toggle");
  var mobileMenu = document.querySelector(".mobile-menu");

  if (toggle && mobileMenu) {
    var links = mobileMenu.querySelectorAll("a");
    var LABEL_OPEN = "Open menu";
    var LABEL_CLOSE = "Close menu";

    function isOpen() {
      return mobileMenu.classList.contains("is-open");
    }

    function setMenu(open) {
      mobileMenu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? LABEL_CLOSE : LABEL_OPEN);
    }

    function closeMenu(returnFocus) {
      if (!isOpen()) return;
      setMenu(false);
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener("click", function () {
      setMenu(!isOpen());
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu(false);
      });
    });

    // Click anywhere outside the menu or the toggle
    document.addEventListener("click", function (e) {
      if (isOpen() && !mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
        closeMenu(false);
      }
    });

    // Escape closes and returns focus to the button
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isOpen()) {
        e.preventDefault();
        closeMenu(true);
      }
    });

    // Trap Tab inside the menu while it is open
    mobileMenu.addEventListener("keydown", function (e) {
      if (e.key !== "Tab" || !isOpen()) return;

      var focusable = [toggle].concat(Array.prototype.slice.call(links));
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    // Collapse automatically if the viewport grows past the breakpoint
    var desktop = window.matchMedia("(min-width: 64.0625rem)");
    var onBreakpoint = function (e) {
      if (e.matches) closeMenu(false);
    };
    if (desktop.addEventListener) {
      desktop.addEventListener("change", onBreakpoint);
    } else if (desktop.addListener) {
      desktop.addListener(onBreakpoint);
    }
  }

  /* --- Scroll Reveal --- */

  var revealTargets = document.querySelectorAll(
    "main section, .hero-copy, .hero-visual, .card-numbered, .service-card, .product-card"
  );

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* --- Copyright Year --- */

  var yearEl = document.querySelector(".copyright-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
