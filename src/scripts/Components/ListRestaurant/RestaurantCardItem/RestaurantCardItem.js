import './RestaurantCardItem.scss';

class RestaurantCardItem extends HTMLElement {
  set restaurant(value) {
    this._config = value;
    this.render();
  }

  render() {
    const { id, name, description, pictureId, city, rating } = this._config;

    this.innerHTML = `
      <img src="${pictureId}" width="100%" alt="${name}">
      <div class="restaurant-card-item__description">
        <p class="restaurant-card-item__description-rating">Rating : ${rating}</p>
        <a href="/${id}">${name} - ${city}</a>
        <p>
          ${description}
        </p>
      </div>
    `;
  }
}

customElements.define('restaurant-card-item', RestaurantCardItem);