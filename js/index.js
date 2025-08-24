// ===== Mobile off-canvas menu =====
(function () {
  const burger = document.querySelector('.burger');
  const nav = document.getElementById(burger?.getAttribute('aria-controls') || 'nav');
  if (!burger || !nav) return;

  // створюємо бекдроп один раз
  let backdrop = document.querySelector('.mobile-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'mobile-backdrop';
    document.body.appendChild(backdrop);
  }
  const html = document.documentElement;

  function openMenu() {
    burger.setAttribute('aria-expanded', 'true');
    nav.classList.add('open');
    backdrop.classList.add('show');
    html.classList.add('no-scroll');
    const first = nav.querySelector('a,button');
    if (first) first.focus();
  }
  function closeMenu() {
    burger.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    backdrop.classList.remove('show');
    html.classList.remove('no-scroll');
    burger.focus();
  }
  function toggleMenu() {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  }

  burger.addEventListener('click', toggleMenu);
  backdrop.addEventListener('click', closeMenu);
  window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  nav.addEventListener('click', e => {      // закриваємо після вибору пункту
    if (e.target.closest('a')) closeMenu();
  });
})();

