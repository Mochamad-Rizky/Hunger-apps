import FoodNewsResource from '../../../data/food-news-resource';
import loader from '../../UI/Loading/loader';
// eslint-disable-next-line import/named
import error from '../../UI/Error/error';

import './FoodNewsItem/FoodNewsItem';
import './FoodNews.scss';
import './Responsive.scss';

class FoodNews extends HTMLElement {
  async connectedCallback() {
    this.render();
    this.listElementContainer = this.querySelector('.list-food-news__container');
    
    try {
      this.listElementContainer.innerHTML = loader();
      this.listElementContainer.style.display = 'block';
      
      this.getData = await FoodNewsResource.getFoodNews('food', 3);
      this.listElementContainer.innerHTML = '';
      this.listElementContainer.style.display = 'grid';
  
      this.getData.value.forEach((item) => {
        const foodNewsCard = document.createElement('food-news-card-item');
        foodNewsCard.className = 'card-item';
        foodNewsCard.foodNews = item;
    
        this.listElementContainer.appendChild(foodNewsCard);
      });
    } catch (errorMessage) {
      this.listElementContainer.innerHTML = error(errorMessage.message);
    }
  }

  render() {
    this.innerHTML = `
      <h2>Food News</h2>
      <div class="list-food-news__container">
      </div>
    `;
  }
}

customElements.define('food-news-component', FoodNews);
