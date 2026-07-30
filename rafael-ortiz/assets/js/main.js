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

  // Completa el _next del formulario con la URL real (funciona en cualquier dominio: Vercel, preview o custom)
  const nextField = document.querySelector('#form-next');
  if (nextField) {
    nextField.value = `${window.location.origin}${window.location.pathname}?enviado=1`;
  }

  // Galería de fotos (lightbox)
  const lightbox = document.querySelector('.lightbox');
  const galleryItems = document.querySelectorAll('[data-gallery]');

  if (lightbox && galleryItems.length) {
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const btnClose = lightbox.querySelector('.lightbox-close');
    const btnPrev = lightbox.querySelector('.lightbox-prev');
    const btnNext = lightbox.querySelector('.lightbox-next');
    let currentGroup = [];
    let currentIndex = 0;

    const renderSlide = () => {
      const item = currentGroup[currentIndex];
      const img = item.querySelector('img');
      lightboxImg.src = item.getAttribute('href') || img.src;
      lightboxImg.alt = img.alt || '';
      lightboxCaption.textContent = img.alt || '';
    };

    const openLightbox = (group, index) => {
      currentGroup = Array.from(document.querySelectorAll(`[data-gallery="${group}"]`));
      currentIndex = index;
      renderSlide();
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
      renderSlide();
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % currentGroup.length;
      renderSlide();
    };

    galleryItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const group = item.getAttribute('data-gallery');
        const groupItems = Array.from(document.querySelectorAll(`[data-gallery="${group}"]`));
        openLightbox(group, groupItems.indexOf(item));
      });
    });

    btnClose.addEventListener('click', closeLightbox);
    btnPrev.addEventListener('click', showPrev);
    btnNext.addEventListener('click', showNext);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }
});
