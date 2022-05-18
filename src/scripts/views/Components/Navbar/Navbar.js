import './Navbar.scss';
import './Responsive.scss';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
        <img src="/images/logo/restaurant.png" alt="Hunger Apps logo" class="nav__logo" width="60">

        <a href="#" id="hamburger" class="nav-hamburger__button">☰</a>

        <ul class="nav__list">
          <li class="nav__item">
            <a href="/" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Favorite</a>
          </li>
          <li class="nav__item">
            <a href="https://www.linkedin.com/in/mochamad-rizky/" class="nav__link" target="_blank">About US</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('navbar-component', Navbar);
