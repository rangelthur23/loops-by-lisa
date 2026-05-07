(() => {
  const style = document.createElement('style');
  style.textContent = `
    html { scroll-behavior: smooth; }
    .header-inner { min-height: 68px !important; padding-top: 8px !important; padding-bottom: 8px !important; align-items: center !important; }
    .site-header .header-brand { width: auto !important; height: auto !important; flex: 0 0 auto !important; overflow: visible !important; display: inline-flex !important; align-items: center !important; }
    .site-header .header-wordmark { width: 174px !important; max-width: 48vw !important; height: auto !important; max-height: 42px !important; object-fit: contain !important; display: block !important; }
    .logo-intro { min-height: calc(100svh - 68px) !important; display: flex !important; align-items: center !important; justify-content: center !important; padding: 32px 0 42px !important; border-bottom: 1px solid rgba(196, 162, 83, 0.28) !important; }
    .logo-intro-inner { display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; text-align: center !important; gap: 24px !important; }
    .intro-badge-logo { width: min(620px, 84vw) !important; max-height: 68svh !important; object-fit: contain !important; display: block !important; }
    .hero-logo { display: none !important; }
    .hero { padding-top: 42px !important; }
    .mobile-nav { padding: 4px 32px 18px !important; }
    .mobile-nav a { font-size: 1.05rem !important; padding: 12px 0 !important; }
    .gallery-thumb { overflow: hidden !important; background: #fbf6ed !important; }
    .gallery-thumb img { width: 100% !important; height: 100% !important; display: block !important; object-fit: cover !important; }
    .gallery-card h3 { text-wrap: balance !important; }
    .gallery-cta { margin-top: 42px !important; display: flex !important; justify-content: center !important; }
    .gallery-cta .button-primary { text-align: center !important; }
    @media (max-width: 640px) {
      .gallery-cta { margin-top: 34px !important; padding-left: 4px !important; padding-right: 4px !important; }
    }
    @media (min-width: 861px) {
      .header-inner { min-height: 74px !important; }
      .site-header .header-wordmark { width: 220px !important; max-width: 220px !important; max-height: 50px !important; }
      .logo-intro { min-height: calc(100svh - 74px) !important; }
      .intro-badge-logo { width: min(680px, 58vw) !important; }
      .hero-logo { display: none !important; }
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
  { title: 'Bracelets', description: 'Custom handmade bracelets with braided cord, beads, and charms.', image: 'assets/Bracelets%20.jpg' },
  { title: 'Keychains', description: 'Durable braided keychains with tassels, beads, and charm details.', image: 'assets/Keychains.jpg' },
  { title: 'Lanyards', description: 'Custom lanyards made with coordinated cord colors and handmade details.', image: 'assets/Lanyards.jpg' },
  { title: 'Earrings', description: 'Handmade earrings and accessories with Lisa-made detail work.', image: 'assets/Earrings.jpg' },
  { title: 'Pen Toppers', description: 'Decorative pen toppers with beads, charms, and playful custom accents.', image: 'assets/PenToppers.jpg' },
  { title: 'Tee Holders', description: 'Handmade tee holders crafted with cord, beads, and charms.', image: 'assets/Teeholders.jpg' },
  { title: 'Zipper Pulls', description: 'Custom zipper pulls for bags, jackets, pouches, and everyday use.', image: 'assets/ZipperPulls.jpg' }
];

const galleryGrid = document.querySelector('#gallery-grid');

if (galleryGrid) {
  galleryGrid.innerHTML = galleryItems.map((item) => `
    <article class="gallery-card" aria-label="${item.title}: ${item.description}">
      <div class="gallery-thumb">
        <img src="${item.image}" alt="${item.description}" loading="lazy" />
      </div>
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
