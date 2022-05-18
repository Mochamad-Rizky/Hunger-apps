import './FoodNewsItem/FoodNewsItem';
import './FoodNews.scss';
import FoodNewsResource from '../../../data/food-news-resource';'../../data/food-news-resource';

class FoodNews extends HTMLElement {
  async connectedCallback() {
    try {
      this.getData = await FoodNewsResource.getFoodNews('food', 3);
      this.render();
      this.listElementContainer = this.querySelector('.list-food-news__container');
    } catch (error) {
      this.listElementContainer.innerHTML = "<h2 style='color: white;'>U have an error</h2>"
    }
    
    this.getData.value.forEach((item) => {
      const foodNewsCard = document.createElement('food-news-card-item');
      foodNewsCard.className = 'card-item';
      foodNewsCard.foodNews = item;
      
      this.listElementContainer.appendChild(foodNewsCard);
    });
  }

  render() {
    this.innerHTML = `
      <section>
        <h2>Food News</h2>
        <div class="list-food-news__container">
        </div>
      </section>
    `;
  }
}

customElements.define('food-news-component', FoodNews);
