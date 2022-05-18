import './Hero.scss';
import './Responsive.scss';

class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div class="hero__content">
          <h1>Find the best restaurants in Indonesia</h1>
          <p>
            Look for the best restaurants and cafes in Indonesia, with a variety of typical foods from each region. Where you will get services like a five-star hotel
          </p>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-component', Hero);
