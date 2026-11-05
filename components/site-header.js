class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
      <!-- COMPONENT CSS GOES HERE -->
     


      
      <!-- COMPONENT MARKUP GOES HERE -->



    <header class="site-header">

        <div class="container">
            <div class="site-logo EEEEfade-in-from-top" style="--animation-delay: .3s">
                <img src="media/logo.svg" alt="Simple-Base-Logo" width="40" height="40">
                <h1><a href="index.html">LogiLama</a></h1>
            </div>
            <nav class="site-nav mobile-menu">
                <button class="menu-button">
                    <svg class="menu-button-navicon rotate-to-x squish-to-x" width="30" height="24">
                        <rect class="top-line" x="0" y="0" height="4" width="30"></rect>
                        <rect class="mid-line" x="0" y="10" height="4" width="30"></rect>
                        <rect class="bot-line" x="0" y="20" height="4" width="30"></rect>
                    </svg>
                    <span class="menu-button-text">Menu</span>
                </button>
                <ul>
                    <li class="EEEEEEfade-in-from-top" style="--animation-delay: .2s;"><a href="styleguide.html">Features</a>
                    </li>
                    <li class="EEEEEEfade-in-from-top" style="--animation-delay: .2s;"><a href="styleguide.html">How it works</a>
                    </li>
                    <li class="EEEEEEfade-in-from-top" style="--animation-delay: .2s;"><a href="styleguide.html">About us</a>
                    </li>
                    <li class="EEEEEEfade-in-from-top" style="--animation-delay: .2s;"><a href="styleguide.html">FAQ</a>
                    </li>
                </ul>
            </nav>

            <div class="header-cta">
                <a href="#" class="button alt">Request a Demo</a>
            </div>

        </div>
    </header>
      
    `;

    // COMPONENT JAVASCRIPT GOES HERE  
    /* MOBILE MENU */
    const siteNav = document.querySelector('.site-nav');
    const menuButton = document.querySelector('.menu-button');

    menuButton.onclick = () => {
      if (siteNav.getAttribute('data-navstate') === 'open') {
        siteNav.setAttribute('data-navstate', 'closed');
      } else {
        siteNav.setAttribute('data-navstate', 'open');
      };
    }
  };
};
customElements.define("site-header", SiteHeader);
