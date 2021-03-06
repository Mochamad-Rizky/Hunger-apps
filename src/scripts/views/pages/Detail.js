import UrlParser from '../../ruotes/url-parser';
import loader from '../UI/Loading/loader';
import error from '../UI/Error/error';
import postReview from '../../utils/post-review';
import RestaurantSource from '../../data/RestraurantSource';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../Components/DetailRestaurant/DetailRestaurant';

const Detail = {
  async render() {
    return `
      <detail-restaurant class="detail"></detail-restaurant>
      <div id="likeButtonContainer"></div>
    `;
  },
  
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('detail-restaurant');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    
    try {
      detailContainer.innerHTML = loader();
      
      const data = await RestaurantSource.detailRestaurant(url.id);
      detailContainer.detailRestaurantData = data;
      
      await LikeButtonInitiator.init({
        likeButtonContainer,
        favoriteRestaurant: FavRestaurantIdb,
        data,
      });
    } catch (errorMessage) {
      likeButtonContainer.innerHTML = '';
      detailContainer.innerHTML = error(errorMessage.message);
    }
    
    const postReviewContainer = document.querySelector('.detail__overview-body-reviews__form');
    const nameInput = postReviewContainer.querySelector('.input-name__review');
    const reviewInput = postReviewContainer.querySelector('.input-description__review');
    
    postReviewContainer.addEventListener('submit', (event) => {
      event.preventDefault();
      
      if (!nameInput.value.trim() || !reviewInput.value.trim()) {
        alert('please insert correct value');
        return;
      }
      
      postReview({
        url: url.id,
        name: nameInput.value,
        review: reviewInput.value,
      });
      
      postReviewContainer.reset();
    });
  },
};

export default Detail;
