/* ============================================
   Products.js — Filters & product modal
   ============================================ */

(function () {
  "use strict";

  var modal = document.querySelector("#product-modal");
  var modalTitle = document.querySelector("#modal-title");
  var modalCopy = document.querySelector("#modal-copy");

  var productData = {
    pos: ["Nexora POS", "Track sales, inventory, customers, and reports from a single point-of-sale workspace."],
    crm: ["Nexora CRM", "Keep customer information, sales activity, and communication organized for the whole team."],
    cloud: ["Nexora Cloud", "Store, share, and manage important business files with secure access from anywhere."],
    learn: ["Nexora Learn", "Give learners a focused home for courses, video lessons, quizzes, and progress."]
  };

  var lastFocused = null;

  /* --- Filter --- */

  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".product-detail");
  var grid = document.querySelector(".product-detail-grid");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;

      filterBtns.forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-pressed", String(b === btn));
      });

      // Suppress the entrance stagger so filtered cards do not fade in
      // one after another on every tap.
      if (grid) grid.classList.add("is-filtering");

      cards.forEach(function (card) {
        var hide = filter !== "all" && card.dataset.category !== filter;
        card.classList.toggle("is-hidden", hide);
        card.hidden = hide;
      });
    });
  });

  /* --- Modal open --- */

  document.querySelectorAll(".product-open").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var data = productData[btn.dataset.product];
      if (!data || !modal || !modalTitle || !modalCopy) return;

      modalTitle.textContent = data[0];
      modalCopy.textContent = data[1];
      lastFocused = document.activeElement;
      modal.showModal();
    });
  });

  /* --- Modal close --- */

  var closeBtn = document.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      if (modal) modal.close();
    });
  }

  // <dialog> fires "close" for the close button, Escape, and backdrop clicks
  if (modal) {
    modal.addEventListener("close", function () {
      if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
      }
      lastFocused = null;
    });
  }
})();
