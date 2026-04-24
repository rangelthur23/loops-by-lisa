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
