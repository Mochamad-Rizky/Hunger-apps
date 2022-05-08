import './RestaurantCardItem.scss';

class RestaurantCardItem extends HTMLElement {
  set restaurant(value) {
    this._config = value;
    this.render();
  }

  render() {
    const { id, name, description, pictureId, city, rating } = this._config;

    this.innerHTML = `
      <img src="${pictureId}" width="100%" alt="${name} ${city}">
      <div class="card-item__description">
        <p class="card-item__description-rating">Rating : ${rating}</p>
        <a href="/${id}" aria-label="article ${name} ${city}">${name} - ${city}</a>
        <p>
          ${description}
        </p>
      </div>
    `;
  }
}

customElements.define('restaurant-card-item', RestaurantCardItem);