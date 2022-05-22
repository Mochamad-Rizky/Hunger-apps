import FavRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };
  
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavRestaurantIdb.putRestaurant({ id: 1 });
  });
  
  afterEach(async () => {
    await FavRestaurantIdb.deleteRestaurant(1);
  });
  
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });
  
  it('should be able to remove like restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
  
  it('should not throw error if unliked movie is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    
    await FavRestaurantIdb.deleteRestaurant(1);
    
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
    
    expect(await FavRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
