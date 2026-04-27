(() => {
  const style = document.createElement('style');
  style.textContent = `
    html {
      scroll-behavior: smooth;
    }

    .header-inner {
      min-height: 68px !important;
      padding-top: 8px !important;
      padding-bottom: 8px !important;
      align-items: center !important;
    }

    .site-header .header-brand {
      width: auto !important;
      height: auto !important;
      flex: 0 0 auto !important;
      overflow: visible !important;
      display: inline-flex !important;
      align-items: center !important;
    }

    .site-header .header-wordmark {
      width: 174px !important;
      max-width: 48vw !important;
      height: auto !important;
      max-height: 42px !important;
      object-fit: contain !important;
      display: block !important;
    }

    .logo-intro {
      min-height: calc(100svh - 68px) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 32px 0 42px !important;
      border-bottom: 1px solid rgba(196, 162, 83, 0.28) !important;
    }

    .logo-intro-inner {
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      gap: 24px !important;
    }

    .intro-badge-logo {
      width: min(620px, 84vw) !important;
      max-height: 68svh !important;
      object-fit: contain !important;
      display: block !important;
    }

    .scroll-cue {
      display: inline-flex !important;
      flex-direction: column !important;
      gap: 4px !important;
      text-decoration: none !important;
      color: inherit !important;
    }

    .scroll-cue span {
      color: #a67c21 !important;
      font-size: 0.8rem !important;
      font-weight: 700 !important;
      letter-spacing: 0.18em !important;
      text-transform: uppercase !important;
    }

    .scroll-cue strong {
      font-size: 0.95rem !important;
      font-weight: 500 !important;
    }

    .hero-logo {
      display: none !important;
    }

    .hero {
      padding-top: 42px !important;
    }

    .mobile-nav {
      padding: 4px 32px 18px !important;
    }

    .mobile-nav a {
      font-size: 1.05rem !important;
      padding: 12px 0 !important;
    }

    @media (min-width: 861px) {
      .header-inner {
        min-height: 74px !important;
      }

      .site-header .header-wordmark {
        width: 220px !important;
        max-width: 220px !important;
        max-height: 50px !important;
      }

      .logo-intro {
        min-height: calc(100svh - 74px) !important;
      }

      .intro-badge-logo {
        width: min(680px, 58vw) !important;
      }

      .hero-logo {
        display: none !important;
      }
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
