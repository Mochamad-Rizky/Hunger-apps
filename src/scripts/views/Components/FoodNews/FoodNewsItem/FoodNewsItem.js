import placeholder from '../../../../../public/images/Universal/placeholder-large.jpg';
import './FoodNewsItem.scss';

class FoodNewsItem extends HTMLElement {
  set foodNews(value) {
    this._config = value;
    this.render();
  }

  render() {
    const { name: title, url: linkArticle, image, description } = this._config;
    this.innerHTML = `
      <img class="lazyload" src="${placeholder}" data-src="${image?.thumbnail?.contentUrl}" width="100%" alt="Card article Thumbnail">
      <div class="card-item__description">
        <a href="${linkArticle}" class="card-item__description-link" aria-label="article ${title} ">${title}</a>
        <p>
          ${description}
        </p>
      </div>
    `;
  }
}

customElements.define('food-news-card-item', FoodNewsItem);
