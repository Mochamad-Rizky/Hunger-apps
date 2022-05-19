import API_ENDPOINT from '../../../global/api-endpoint';
import cardReview from '../../UI/CardReview/card-review';
import form from '../../UI/Form/form';
import './DetailRestaurant.scss';
import './Responsive.scss';

class Detail extends HTMLElement {
  set detailRestaurantData(data) {
    this._data = data.restaurant;
    this.render();
  }
  
  render() {
    const {
      name,
      description,
      city,
      address,
      pictureId,
      categories,
      menus,
      rating,
      customerReviews,
    } = this._data;
    
    this.innerHTML = `
      <section class="detail__overview">
        <section class="detail__overview-header">
          <figure>
            <img src="${API_ENDPOINT.IMAGE + pictureId}" width="100%" alt=${city} />
          </figure>
          
          <div class="detail__overview-header-info">
            <h1>${name}</h1>
          </div>
        </section>
        
        <section class="detail__overview-body">
          <section class="detail__overview-body-info">
            <h2>Information</h2>
            <p>Rating: ${rating}</p>
            <p>Address: ${address}, ${city}</p>
          </section>
          
          <section class="detail__overview-body-description">
            <h2>Description</h2>
            <p>${description}</p>
          </section>
          
          <section class="detail__overview-body-categories">
            <h2>Categories</h2>
            <ul>
              ${categories.map((category) => `<li>${category.name}</li>`).join('')}
            </ul>
          </section>
          
          <section class="detail__overview-body-menus">
            <h2>Menus</h2>
            <div class="detail__overview-body-menus__container">
              <div class="detail__overview-body-menus__container-item">
                <h3>Foods</h2>
                <ul>
                  ${menus.foods.map((menu) => `<li>${menu.name}</li>`).join('')}
                </ul>
              </div>
              <div class="detail__overview-body-menus__container-item">
                <h3>Drinks</h2>
                <ul>
                  ${menus.drinks.map((menu) => `<li>${menu.name}</li>`).join('')}
                </ul>
              </div>
            </div>
          </section>
          
          <section class="detail__overview-body-reviews">
            <h2>Customer Reviews</h2>
            <div class="detail__overview-body-reviews__container">
              ${customerReviews.map((review) => cardReview(review)).join('')}
            </div>
          </section>
          
          <section>
            <h2>Write a Review</h2>
            ${form()}
          </section>
        </section>
      </section>
    `;
  }
}

customElements.define('detail-restaurant', Detail);
