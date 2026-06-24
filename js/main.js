/* =============================================
   SpiceGarden — main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Active nav link --- */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* --- Hamburger menu toggle --- */
  const ham = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (ham && navLinks) {
    ham.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.display = open ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '64px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = '#fff';
      navLinks.style.padding = '16px 24px 24px';
      navLinks.style.borderBottom = '0.5px solid #e8e0d6';
      navLinks.style.gap = '16px';
      if (open) navLinks.style.display = 'none';
    });
  }

  /* --- Scroll-reveal for any .reveal elements --- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }

});

/* =============================================
   HERO page (index.html) only
   ============================================= */
function initHero() {
  const wrap = document.getElementById('heroWrap');
  const bg   = document.getElementById('heroBg');
  const dot  = document.getElementById('mouseDot');
  const ring = document.getElementById('mouseRing');
  if (!wrap) return;

  /* Parallax on scroll */
  window.addEventListener('scroll', () => {
    bg.style.transform = `translateY(${window.scrollY * 0.4}px)`;
  }, { passive: true });

  /* Mouse parallax tilt */
  wrap.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
  wrap.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    bg.style.transform = 'translate(0,0) scale(1)';
    bg.style.transition = 'transform 0.6s ease';
  });
  wrap.addEventListener('mousemove', (e) => {
    const r  = wrap.getBoundingClientRect();
    const x  = e.clientX - r.left;
    const y  = e.clientY - r.top;
    dot.style.left = x + 'px';  dot.style.top = y + 'px';
    ring.style.left = x + 'px'; ring.style.top = y + 'px';
    const cx = (x / r.width  - 0.5) * 8;
    const cy = (y / r.height - 0.5) * 5;
    bg.style.transform = `translate(${cx}px,${cy}px) scale(1.05)`;
    bg.style.transition = 'transform 0.35s ease';
  });
}

/* =============================================
   MENU page (menu.html) only
   ============================================= */
function switchCat(id, btn) {
  document.querySelectorAll('.category-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('cat-' + id).classList.add('active');
  btn.classList.add('active');
}

/* =============================================
   CONTACT page (contact.html) only
   ============================================= */
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.getElementById('formSuccess');
    if (success) {
      success.classList.add('visible');
      form.reset();
      setTimeout(() => success.classList.remove('visible'), 5000);
    }
  });
}

/* Run page-specific inits */
document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initContact();
});
