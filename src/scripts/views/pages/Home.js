import RestaurantSource from '../../data/RestraurantSource';
import '../Components/Hero/Hero';
import '../Components/Promotion/Promotion';
import '../Components/ListRestaurant/ListRestaurant';
import '../Components/FoodNews/FoodNews';
import '../Components/ListRestaurant/RestaurantCardItem/RestaurantCardItem';

const Home = {
  async render() {
    return `
      <hero-component></hero-component>
      <list-restaurant-component class="list-restaurant">
      
      </list-restaurant-component>
      <food-news-component class="list-food-news"></food-news-component>
      <promotion-component></promotion-component>
    `;
  },
  
  async afterRender() {
    const restaurantContainer = document.querySelector('.list-restaurant__container');
    
    try {
      const data = await RestaurantSource.listRestaurant();
      data.restaurants.forEach((restaurant) => {
        const restaurantCardItem = document.createElement('restaurant-card-item');
        restaurantCardItem.className = 'card-item';
        restaurantCardItem.restaurant = restaurant;
        restaurantContainer.appendChild(restaurantCardItem);
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Home;
