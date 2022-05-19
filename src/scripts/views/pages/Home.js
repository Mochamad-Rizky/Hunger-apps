import RestaurantSource from '../../data/RestraurantSource';
import '../Components/Hero/Hero';
import '../Components/Promotion/Promotion';
import '../Components/ListRestaurant/ListRestaurant';
import '../Components/FoodNews/FoodNews';
import '../Components/ListRestaurant/RestaurantCardItem/RestaurantCardItem';
import loader from '../UI/Loading/loader';
import error from '../UI/Error/error';

const Home = {
  async render() {
    return `
      <hero-component></hero-component>
      <list-restaurant-component class="list-restaurant" title="List Restaurant">
      
      </list-restaurant-component>
      <food-news-component class="list-food-news"></food-news-component>
      <promotion-component></promotion-component>
    `;
  },
  
  async afterRender() {
    const restaurantContainer = document.querySelector('.list-restaurant__container');
    
    try {
      restaurantContainer.innerHTML = loader();
      restaurantContainer.style.display = 'block';
      
      const data = await RestaurantSource.listRestaurant();
      restaurantContainer.innerHTML = '';
      restaurantContainer.style.display = 'grid';
      
      data?.restaurants?.forEach((restaurant) => {
        const restaurantCardItem = document.createElement('restaurant-card-item');
        restaurantCardItem.className = 'card-item';
        restaurantCardItem.restaurant = restaurant;
        restaurantContainer.appendChild(restaurantCardItem);
      });
    } catch (errorMessage) {
      restaurantContainer.innerHTML = error(errorMessage.message);
    }
  },
};

export default Home;
