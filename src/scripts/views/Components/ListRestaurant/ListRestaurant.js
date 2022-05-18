import './ListRestaurant.scss';
import './Responsive.scss';

class ListRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2>List Restaurant</h2>
      <div class="list-restaurant__container">
      </div>
    `;
  }
}

customElements.define('list-restaurant-component', ListRestaurant);
