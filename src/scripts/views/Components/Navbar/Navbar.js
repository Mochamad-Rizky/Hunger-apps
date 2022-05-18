import './Navbar.scss';
import './Responsive.scss';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="nav">
        <img src="/images/logo/restaurant.png" alt="Hunger Apps logo" class="nav__logo" width="60" height="60">

        <button id="hamburger" class="nav-hamburger__button">☰</button>

        <ul class="nav__list">
          <li class="nav__item">
            <a href="#/list-restaurant" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#/favorite" class="nav__link">Favorite</a>
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
