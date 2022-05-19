import './ListRestaurant.scss';
import './Responsive.scss';

class ListRestaurant extends HTMLElement {
  connectedCallback() {
    this._title = this.getAttribute('title');
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>${this._title}</h2>
      <div class="list-restaurant__container">
      </div>
    `;
  }
}

customElements.define('list-restaurant-component', ListRestaurant);
