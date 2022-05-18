import './ListRestaurant.scss';
import './Responsive.scss';
import './RestaurantCardItem/RestaurantCardItem';

import Data from '../../../../DATA.json';

class ListRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();

    this.listElementContainer = this.querySelector('.list-restaurant__container');

    Data.restaurants.forEach((item) => {
      const restaurantCard = document.createElement('restaurant-card-item');
      restaurantCard.className = 'card-item';
      restaurantCard.restaurant = item;
      
      this.listElementContainer.appendChild(restaurantCard);
    });
  }

  render() {
    this.innerHTML = `
      <section>
        <h2>List Restaurant</h2>
        <div class="list-restaurant__container">
        </div>
      </section>
    `;
  }
}

customElements.define('list-restaurant-component', ListRestaurant);
