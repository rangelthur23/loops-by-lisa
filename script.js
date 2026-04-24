(() => {
  const style = document.createElement('style');
  style.textContent = `
    .header-inner { min-height: 70px !important; padding-top: 6px !important; padding-bottom: 6px !important; }
    .site-header .brand-image-link { width: 62px !important; height: 62px !important; flex: 0 0 62px !important; overflow: visible !important; }
    .site-header .brand-logo { width: 62px !important; max-width: 62px !important; height: 62px !important; max-height: 62px !important; object-fit: contain !important; }
    .hero-logo { width: min(190px, 54vw) !important; margin-bottom: 16px !important; }
    .hero { padding-top: 34px !important; }
    .mobile-nav { padding: 4px 32px 18px !important; }
    .mobile-nav a { font-size: 1.15rem !important; padding: 12px 0 !important; }
    @media (min-width: 861px) {
      .header-inner { min-height: 82px !important; }
      .site-header .brand-image-link { width: 82px !important; height: 82px !important; flex-basis: 82px !important; }
      .site-header .brand-logo { width: 82px !important; max-width: 82px !important; height: 82px !important; max-height: 82px !important; }
      .hero-logo { width: min(220px, 58vw) !important; }
    }
  `;
  document.head.appendChild(style);
})();

const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileMenu.hidden = true;
    });
  });
}

const galleryItems = [
  { title: 'Bracelets', description: 'Stacked braided bracelets with bead and charm details.' },
  { title: 'Keychains', description: 'Durable braided keychains with tassels, beads, and charms.' },
  { title: 'Lanyards', description: 'Custom lanyards made with coordinated cord colors.' },
  { title: 'Dog Collars', description: 'Decorative braided collars with custom color combinations.' },
  { title: 'Decorations', description: 'Seasonal hanging loops, tassels, and keepsake accents.' }
];

const galleryGrid = document.querySelector('#gallery-grid');

if (galleryGrid) {
  galleryGrid.innerHTML = galleryItems.map((item) => `
    <article class="gallery-card" aria-label="${item.title}: ${item.description}">
      <div class="gallery-thumb" role="img" aria-label="Photo placeholder for ${item.title}"></div>
      <h3>${item.title}</h3>
    </article>
  `).join('');
}

const form = document.querySelector('#inquiry-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Loops by Lisa custom inquiry');
    const body = encodeURIComponent(
      `Name: ${data.get('name') || ''}\n` +
      `Email: ${data.get('email') || ''}\n` +
      `Item type: ${data.get('item') || ''}\n` +
      `Color ideas: ${data.get('colors') || ''}\n\n` +
      `Message:\n${data.get('message') || ''}`
    );
    window.location.href = `mailto:hello@loopsbylisa.com?subject=${subject}&body=${body}`;
  });
}
