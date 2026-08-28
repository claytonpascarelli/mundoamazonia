/* nav-loader.js — injects shared header/nav into every inner page */
(function () {
  var nav = `
<!-- TOP BAR -->
<div class="top-bar">
  <div class="container top-bar-inner">
    <div class="top-bar-left">
      <span data-i18n="topbar.tagline">O maior bioma do planeta te espera</span>
    </div>
    <div class="top-bar-right">
      <div class="top-bar-social">
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
      </div>
      <div class="lang-switcher">
        <button class="lang-btn active" data-lang="pt">PT</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" data-lang="en">EN</button>
        <span class="lang-divider">|</span>
        <button class="lang-btn" data-lang="es">ES</button>
      </div>
    </div>
  </div>
</div>

<!-- HEADER -->
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo-link">
      <img src="images/logo-mundoamazonia.svg" alt="Mundo Amazônia" class="logo-img">
    </a>
    <nav aria-label="Navegação principal">
      <ul class="nav-main">
        <li class="nav-item">
          <a href="index.html#estados" class="nav-link">
            <span data-i18n="nav.states">Os Estados</span>
            <i class="fas fa-chevron-down"></i>
          </a>
          <div class="dropdown-menu dropdown-mega">
            <div class="mega-header" data-i18n="nav.estados.title">Amazônia Legal — 7 Estados</div>
            <div class="mega-grid">
              <a href="estados/amazonas.html" class="mega-state-item">
                <div class="mega-state-flag">AM</div>
                <div class="mega-state-info"><strong>Amazonas</strong><span>Manaus</span></div>
              </a>
              <a href="estados/para.html" class="mega-state-item">
                <div class="mega-state-flag">PA</div>
                <div class="mega-state-info"><strong>Pará</strong><span>Belém</span></div>
              </a>
              <a href="estados/acre.html" class="mega-state-item">
                <div class="mega-state-flag">AC</div>
                <div class="mega-state-info"><strong>Acre</strong><span>Rio Branco</span></div>
              </a>
              <a href="estados/amapa.html" class="mega-state-item">
                <div class="mega-state-flag">AP</div>
                <div class="mega-state-info"><strong>Amapá</strong><span>Macapá</span></div>
              </a>
              <a href="estados/rondonia.html" class="mega-state-item">
                <div class="mega-state-flag">RO</div>
                <div class="mega-state-info"><strong>Rondônia</strong><span>Porto Velho</span></div>
              </a>
              <a href="estados/roraima.html" class="mega-state-item">
                <div class="mega-state-flag">RR</div>
                <div class="mega-state-info"><strong>Roraima</strong><span>Boa Vista</span></div>
              </a>
              <a href="estados/tocantins.html" class="mega-state-item">
                <div class="mega-state-flag">TO</div>
                <div class="mega-state-info"><strong>Tocantins</strong><span>Palmas</span></div>
              </a>
            </div>
          </div>
        </li>
        <li class="nav-item"><a href="atividades.html" class="nav-link"><span data-i18n="nav.todo">O que fazer</span></a></li>
        <li class="nav-item"><a href="gastronomia.html" class="nav-link"><span data-i18n="nav.eat">Onde Comer</span></a></li>
        <li class="nav-item"><a href="hospedagem.html" class="nav-link"><span data-i18n="nav.stay">Onde Ficar</span></a></li>
        <li class="nav-item"><a href="festivais.html" class="nav-link"><span data-i18n="nav.festivals">Festivais</span></a></li>
        <li class="nav-item"><a href="galeria.html" class="nav-link"><span data-i18n="nav.gallery">Galeria</span></a></li>
      </ul>
    </nav>
    <div class="header-actions">
      <button class="search-btn" id="searchBtn" aria-label="Buscar"><i class="fas fa-search"></i></button>
    </div>
    <button class="hamburger" id="hamburger" aria-label="Abrir menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<!-- Search Overlay -->
<div class="search-overlay" id="searchOverlay">
  <button class="search-close" id="searchClose"><i class="fas fa-times"></i></button>
  <div class="search-box">
    <h3>🌿 Buscar na Amazônia</h3>
    <div class="search-input-row">
      <input type="text" placeholder="Buscar destinos, municípios, atrações...">
      <button class="btn-search-go">Buscar</button>
    </div>
  </div>
</div>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-header">
    <div class="logo-text"><span class="logo-main" style="color:white">Mundo Amazônia</span></div>
    <button class="mobile-menu-close" id="mobileClose"><i class="fas fa-times"></i></button>
  </div>
  <a class="mobile-nav-link" data-toggle="mobileStates" href="javascript:void(0)">
    <span data-i18n="nav.states">Os Estados</span> <i class="fas fa-chevron-right"></i>
  </a>
  <div id="mobileStates" class="mobile-sub-menu" style="display:none">
    <a class="mobile-sub-link" href="estados/amazonas.html">Amazonas</a>
    <a class="mobile-sub-link" href="estados/para.html">Pará</a>
    <a class="mobile-sub-link" href="estados/acre.html">Acre</a>
    <a class="mobile-sub-link" href="estados/amapa.html">Amapá</a>
    <a class="mobile-sub-link" href="estados/rondonia.html">Rondônia</a>
    <a class="mobile-sub-link" href="estados/roraima.html">Roraima</a>
    <a class="mobile-sub-link" href="estados/tocantins.html">Tocantins</a>
  </div>
  <a class="mobile-nav-link" href="atividades.html"><span data-i18n="nav.todo">O que fazer</span> <i class="fas fa-chevron-right"></i></a>
  <a class="mobile-nav-link" href="gastronomia.html"><span data-i18n="nav.eat">Onde Comer</span> <i class="fas fa-chevron-right"></i></a>
  <a class="mobile-nav-link" href="hospedagem.html"><span data-i18n="nav.stay">Onde Ficar</span> <i class="fas fa-chevron-right"></i></a>
  <a class="mobile-nav-link" href="festivais.html"><span data-i18n="nav.festivals">Festivais</span> <i class="fas fa-chevron-right"></i></a>
  <a class="mobile-nav-link" href="galeria.html"><span data-i18n="nav.gallery">Galeria</span> <i class="fas fa-chevron-right"></i></a>
  <div class="mobile-lang-bar">
    <button class="mobile-lang-btn active" data-lang="pt">PT</button>
    <button class="mobile-lang-btn" data-lang="en">EN</button>
    <button class="mobile-lang-btn" data-lang="es">ES</button>
  </div>
</div>
`;

  var placeholder = document.getElementById('site-nav-placeholder');
  if (placeholder) {
    placeholder.outerHTML = nav;
  } else {
    document.body.insertAdjacentHTML('afterbegin', nav);
  }
})();
