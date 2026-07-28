// Menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Confirmación de envío de formulario (FormSubmit redirige con ?enviado=1)
  const params = new URLSearchParams(window.location.search);
  const successBanner = document.querySelector('[data-success-banner]');
  if (params.get('enviado') === '1' && successBanner) {
    successBanner.hidden = false;
    successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});
