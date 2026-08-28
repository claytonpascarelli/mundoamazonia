/* ============================================================
   MUNDO AMAZÔNIA — main.js
   Interatividade: hero slider, menus, filtros, scroll animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Hero Slider ── */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  let current  = 0;
  let heroTimer;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function nextSlide() { goToSlide(current + 1); }

  function startHero() {
    clearInterval(heroTimer);
    heroTimer = setInterval(nextSlide, 6000);
  }

  if (slides.length) {
    slides[0].classList.add('active');
    dots[0]?.classList.add('active');
    startHero();
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { goToSlide(i); startHero(); });
    });
  }

  /* ── Menu hamburger / mobile ── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  hamburger?.addEventListener('click', () => mobileMenu?.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu?.classList.remove('open'));

  /* Sub-menus mobile com toggle */
  document.querySelectorAll('.mobile-nav-link[data-toggle]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.toggle);
      if (!target) return;
      const open = target.style.display === 'block';
      target.style.display = open ? 'none' : 'block';
      const icon = link.querySelector('i');
      if (icon) icon.style.transform = open ? '' : 'rotate(90deg)';
    });
  });

  /* ── Search overlay ── */
  const searchBtn     = document.getElementById('searchBtn');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchClose   = document.getElementById('searchClose');

  searchBtn?.addEventListener('click', () => {
    searchOverlay?.classList.add('open');
    searchOverlay?.querySelector('input')?.focus();
  });
  searchClose?.addEventListener('click', () => searchOverlay?.classList.remove('open'));
  searchOverlay?.addEventListener('click', e => {
    if (e.target === searchOverlay) searchOverlay.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchOverlay?.classList.remove('open');
      mobileMenu?.classList.remove('open');
    }
  });

  /* ── Filtros de Hospedagem ── */
  document.querySelectorAll('.accom-filter .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.accom-filter .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.accom-card').forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── Tabs de Atividades ── */
  document.querySelectorAll('.activity-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.activity-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      document.querySelectorAll('.activity-card').forEach(card => {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ── Scroll animations (Intersection Observer) ── */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => obs.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Header scroll shadow ── */
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      header.style.boxShadow = window.scrollY > 20
        ? '0 4px 24px rgba(10,61,26,0.18)'
        : '0 2px 20px rgba(10,61,26,0.12)';
    }
  }, { passive: true });

  /* ── Busca rápida ── */
  const qsForm = document.getElementById('quickSearchForm');
  qsForm?.addEventListener('submit', e => {
    e.preventDefault();
    const state = document.getElementById('qsState')?.value || '';
    const type  = document.getElementById('qsType')?.value || '';
    const dest  = document.getElementById('qsDest')?.value || '';
    let url = 'busca.html?';
    if (state) url += `estado=${encodeURIComponent(state)}&`;
    if (type)  url += `tipo=${encodeURIComponent(type)}&`;
    if (dest)  url += `q=${encodeURIComponent(dest)}&`;
    window.location.href = url.replace(/&$/, '');
  });

  /* ── Newsletter ── */
  const nlForm = document.getElementById('newsletterForm');
  nlForm?.addEventListener('submit', e => {
    e.preventDefault();
    const email = nlForm.querySelector('input[type=email]')?.value;
    if (email) {
      const btn = nlForm.querySelector('button');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = '✓ Inscrito!';
        btn.style.background = '#28a352';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          nlForm.reset();
        }, 3000);
      }
    }
  });

  /* ── Smooth scroll para âncoras internas ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Tabs de Município (nas páginas de estado) ── */
  document.querySelectorAll('.state-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panelId = btn.dataset.panel;
      document.querySelectorAll('.state-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.muni-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(panelId)?.classList.add('active');
      /* scroll suave para o painel */
      document.getElementById('muniContent')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
