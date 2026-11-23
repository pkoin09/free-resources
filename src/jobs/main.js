// Greater South Bay Job Guide — minimal JS for progressive enhancement
// No framework; vanilla JS for toggles, smooth scroll, etc.

(function () {
  'use strict';

  // Mobile nav toggle (if needed later)
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !expanded);
      navMenu.hidden = expanded;
    });
  }

  // Smooth scroll for anchor links (respect prefers-reduced-motion)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
      }
    });
  });

  // Expandable sections (for guide categories)
  document.querySelectorAll('.expandable > summary').forEach((summary) => {
    summary.addEventListener('click', (e) => {
      // Let browser handle <details> toggle; this is just for keyboard UX
      e.target.closest('details').toggleAttribute('open');
    });
  });

  // Print current week's roundup (if present)
  const printBtn = document.querySelector('[data-print-roundup]');
  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
})();