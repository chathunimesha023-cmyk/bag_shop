document.addEventListener('DOMContentLoaded', () => {

  /* ---- Nav: solid background after scrolling past hero ---- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu toggle ---- */
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in'), i * 40);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- Add to Bag -> cart counter ---- */
  let cartCount = 0;
  const cartCountEl = document.querySelector('.cart-count');
  document.querySelectorAll('.btn-line').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount += 1;
      cartCountEl.textContent = cartCount;
      const original = btn.textContent;
      btn.textContent = 'Added ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 1400);
    });
  });

  /* ---- Newsletter form (front-end only) ---- */
  const form = document.getElementById('newsletterForm');
  const note = document.getElementById('newsletterNote');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = "You're on the list — welcome to Wayfare.";
    form.reset();
  });

  /* ---- Hero parallax (subtle) ---- */
  const heroImg = document.getElementById('heroImg');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroImg.style.transform = `scale(1.08) translateY(${y * 0.08}px)`;
    }
  }, { passive: true });

});
