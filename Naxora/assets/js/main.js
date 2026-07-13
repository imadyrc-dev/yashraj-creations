/* =============================================
   SPICECRAFT EXPORTS — MAIN JAVASCRIPT
   ============================================= */

(function () {
  'use strict';

  /* ---- Active nav link ---- */
  function setActiveNav() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-main .nav-link[data-page]').forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === current) {
        link.classList.add('active');
      }
    });
    document.querySelectorAll('.offcanvas-sidebar .nav-link[data-page]').forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('data-page') === current) {
        link.classList.add('active');
      }
    });
  }

  /* ---- Product Gallery: thumbnail switching ---- */
  function initGallery() {
    var thumbs = document.querySelectorAll('.gallery-thumb');
    var mainImg = document.querySelector('#gallery-main-img');
    if (!thumbs.length || !mainImg) return;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbs.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        var src = thumb.querySelector('img').getAttribute('src');
        mainImg.setAttribute('src', src);
      });
    });
  }

  /* ---- Product detail tabs ---- */
  function initTabs() {
    var tabBtns = document.querySelectorAll('.tab-btn');
    var tabPanes = document.querySelectorAll('.tab-pane');
    if (!tabBtns.length) return;

    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        tabBtns.forEach(function (b) { b.classList.remove('active'); });
        tabPanes.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        var pane = document.getElementById(target);
        if (pane) pane.classList.add('active');
      });
    });
  }

  /* ---- Inquiry form validation ---- */
  function initInquiryForm() {
    var form = document.getElementById('inquiryForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      var btn = form.querySelector('[type=submit]');
      var original = btn.innerHTML;
      btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending…';
      btn.disabled = true;

      setTimeout(function () {
        btn.innerHTML = '✓ Inquiry Sent!';
        btn.style.background = '#2D6A4F';
        setTimeout(function () {
          form.reset();
          form.classList.remove('was-validated');
          btn.innerHTML = original;
          btn.style.background = '';
          btn.disabled = false;
        }, 3500);
      }, 1600);
    });
  }

  /* ---- Scroll-aware navbar shadow ---- */
  function initNavScroll() {
    var nav = document.querySelector('.navbar-main');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 4px 20px rgba(27,67,50,0.14)';
      } else {
        nav.style.boxShadow = '0 2px 12px rgba(27,67,50,0.08)';
      }
    }, { passive: true });
  }

  /* ---- Init all ---- */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    initGallery();
    initTabs();
    initInquiryForm();
    initNavScroll();
  });

})();

// Disable Right Click


// Disable F12, Ctrl+U, Ctrl+S
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.key.toLowerCase() === "u") ||
        (e.ctrlKey && e.key.toLowerCase() === "s")
    ) {
        e.preventDefault();
    }
});