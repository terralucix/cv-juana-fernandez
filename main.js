/* ===========================
   CV Juana — main.js
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll-reveal sections ─────────────────────────── */
  const sections = document.querySelectorAll('.cv-section.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(sec => revealObserver.observe(sec));

  /* ── Active nav highlight on scroll ─────────────────── */
  const navLinks  = document.querySelectorAll('.nav-link');
  const sectionIds = [...navLinks].map(l => l.dataset.section);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });

  /* ── Language bars animate in ────────────────────────── */
  const langFills = document.querySelectorAll('.lang-fill');
  const stored = {};

  langFills.forEach(fill => {
    stored[fill] = fill.style.width;
    fill.style.width = '0%';
  });

  const langObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        langFills.forEach(fill => {
          fill.style.width = stored[fill];
        });
        langObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });

  const sidebar = document.getElementById('sidebar');
  if (sidebar) langObserver.observe(sidebar);

  /* ── Smooth-scroll nav clicks ────────────────────────── */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
