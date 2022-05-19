import FavRestaurantIdb from '../../data/favorite-restaurant-idb';
import error from '../UI/Error/error';
import '../Components/ListRestaurant/ListRestaurant';
import '../Components/ListRestaurant/RestaurantCardItem/RestaurantCardItem';
import '../Components/Promotion/Promotion';

const Favorite = {
  async render() {
    return `
      <list-restaurant-component class="list-restaurant" title="Favorite Restaurant">
      
      </list-restaurant-component>
    `;
  },
  
  async afterRender() {
    const data = await FavRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('.list-restaurant__container');
    
    if (data.length === 0) {
      restaurantContainer.innerHTML = error('U don\'t have any favorite restaurant');
      restaurantContainer.style.display = 'block';
      return;
    }
    
    data?.forEach((restaurant) => {
      const restaurantCardItem = document.createElement('restaurant-card-item');
      restaurantCardItem.className = 'card-item';
      restaurantCardItem.restaurant = restaurant;
      restaurantContainer.appendChild(restaurantCardItem);
    });
  },
};

export default Favorite;
